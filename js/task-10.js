function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("#controls").firstElementChild;
const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector("button[data-create");
const destroyBtnRef = document.querySelector("button[data-destroy");

let size = 30;

console.log(inputRef);
console.log(boxesRef);
console.log(createBtnRef);
console.log(destroyBtnRef);

const createBoxes = () => {
  const quantity = inputRef.value;
  let markup = "";
  for (let i = 0; i < quantity; i++){    
    markup += `<div style="background-color: ${getRandomHexColor()};
    width:${size}px;
    height:${size}px;
    margin-bottom:10px;
    margin-top:10px"></div>`;
    size += 10;
  }  
  boxesRef.innerHTML = markup;
  size = 30;
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
  size = 30;
 };

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);



