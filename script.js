const numberText = document.getElementById("number");
let number = 0;
let size = 32;

const update = () => {
  numberText.innerHTML = number;
  numberText.style.fontSize = size + "px";
};

const increase = () => {
  number++;
  update();
};
const decrease = () => {
  number--;
  update();
};
const increase5 = () => {
  number += 5;
  update();
};
const decrease5 = () => {
  number -= 5;
  update();
};
const changeColor = () => {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  numberText.style.color = `rgb(${r},${g},${b})`;
};
const sizeIncrease = () => {
  size++;
  update();
};
const sizeDecrease = () => {
  size--;
  update();
};

update();
