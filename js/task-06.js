function checkSumbols(e) {
 if (valueFor === e.target.value.length) {
 updateStatus("valid", "invalid");
  } else {
 updateStatus("invalid", "valid");
  }
}

function updateStatus(add, rem) {
 inputEl.classList.add(add);
 inputEl.classList.remove(rem);
}
 


// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", checkSumbols);

// const valueFor = Number(inputEl.dataset.length);

// function checkSumbols(i) {
//   inputEl.textContent = i.currentTarget.value;

//   if (valueFor === Number(inputEl.textContent.length)) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else if (
//     valueFor < Number(inputEl.textContent.length) ||
//     valueFor > Number(inputEl.textContent.length)
//   ) {
//     inputEl.classList.add("invalid");
//   }
// }
// Зробила трохи по іншому. По іншому воно в мене не спрацьовує





// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", checkSumbols);

// function checkSumbols() {
//   if (input.value.length === Number(input.dataset.length)) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// }


// const input = document.querySelector("#validation-input");
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




