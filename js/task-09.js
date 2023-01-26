// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   bodyEl: document.querySelector('body'),
//   buttonEl: document.querySelector('.change-color'),
//   spanEl: document.querySelector('.color'),
// }

// refs.buttonEl.addEventListener('click', changeColor);

// function changeColor() {
//   refs.bodyEl.style.backgroundColor = getRandomHexColor();

//   refs.spanEl.replaceChildren(getRandomHexColor(toString));
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
btn.addEventListener("click", onChangeColor);

function onChangeColor() {
  //  якщо видалити цю змину, то в span і style.backgroundColor будуть різні кольори
  const backgroundColor = getRandomHexColor();

  span.textContent = backgroundColor;
  document.querySelector("body").style.backgroundColor = backgroundColor;
}