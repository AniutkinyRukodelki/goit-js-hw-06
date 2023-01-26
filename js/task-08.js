const user = {};
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const passwordEl = loginForm.elements.password.value;
    const emailEl = loginForm.elements.email.value;
    if (passwordEl === "" ||
        emailEl === "") {
        alert("Ви заповнили не всі поля форми");
        return;
    }
    
    user.email = emailEl;
    user.password = passwordEl;
    console.log(user);
    loginForm.reset();
}