const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkSumbols);

function checkSumbols() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

// const lengthEl = Number(input.dataset.length);

// input.addEventListener('input', onInputBlur);

// function onInputBlur() {
//     if (input.value.length === lengthEl) {
//         input.classList.remove('invalid');
//         return input.classList.add('valid');
//     } else {
//         input.classList.remove('valid');
//         return input.classList.add('invalid');
//     }
// }




