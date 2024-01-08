let color;
let randomColor = function () {
  const hex = "0123456789abcdef";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colorIDs = document.querySelector("#colorId");
let intervalID;
const startChanging = function () {
  intervalID = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();

    if (color != undefined) {
      colorIDs.innerHTML = color;
      colorIDs.style.color= 'color';
    } else {
      colorIDs.innerHTML = "";
    }
  }
};
const stopChanging = function () {
  clearInterval(intervalID);
  intervalID = null;
};
document.querySelector("#start").addEventListener("click", startChanging);
document.querySelector("#stop").addEventListener("click", stopChanging);
