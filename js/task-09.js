function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector(".change-color");
const changeColorTextRef = document.querySelector(".color");
const changeBGRef = document.querySelector("body");

const clickHandler = (event) => {
  const currentColor = getRandomHexColor();
  changeBGRef.style.backgroundColor = currentColor;
  changeColorTextRef.textContent = currentColor;
}

changeColorBtnRef.addEventListener("click", clickHandler);

