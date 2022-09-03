
import { loginUser } from "../../services/loginUser.js";

function register_slide() {
    loginForm.classList.remove('show');
    registerForm.classList.add('show');
    slideButton.classList.add('slide');
}

function login_slide() {
    registerForm.classList.remove('show');
    loginForm.classList.add('show');
    slideButton.classList.remove('slide');
}


const loginForm = document.querySelector('#login');
const registerForm = document.querySelector('#register');
const slideButton = document.querySelector('#button_transition');
const agrrementCheckbox = document.querySelector('#checkbox_agrrement');

const loginTab = document.querySelector('#login-tab');
const registerTab = document.querySelector('#register-tab');

loginTab.addEventListener('click', login_slide);
registerTab.addEventListener('click', register_slide);


const loginUsername = document.querySelector('#username_input__login');
const loginPassword = document.querySelector('#password_input__login');

const authenticateUser = async (e) => {
    e.preventDefault();

    if (!agrrementCheckbox.checked) {
        alert('Please agree to the terms and conditions');
        return;
    }

    const username = loginUsername.value;
    const password = loginPassword.value;

    const user = {
        username,
        password
    }

    const response = await loginUser(user);
    if (response.status === 200) {
        alert('User logged in');
        window.location.href = '/';
    } else {
        alert('User not found');
    }
}

loginForm.addEventListener('submit', (e) => {
    authenticateUser(e);
});
