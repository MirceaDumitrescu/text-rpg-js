
import { loginUser } from "../../services/loginUser.js";

function register_slide() {
    loginForm.style.left = '-450px';
    registerForm.style.left = '0';
    slideButton.style.left = '102px';
  }

  function login_slide() {
    loginForm.style.left = '0';
    registerForm.style.left = '450px';
    slideButton.style.left = '0';
  }


const loginForm = document.querySelector('#login');
const registerForm = document.querySelector('#register');
const slideButton = document.querySelector('#button_transition');

const loginTab = document.querySelector('#login-tab');
const registerTab = document.querySelector('#register-tab');

loginTab.addEventListener('click', login_slide);
registerTab.addEventListener('click', register_slide);


const loginUsername = document.querySelector('#username_input__login');
const loginPassword = document.querySelector('#password_input__login');

const authenticateUser = async (e) => {
    e.preventDefault();

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
