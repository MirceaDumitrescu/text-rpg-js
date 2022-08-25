import { saveUser } from "../../services/saveUser.js";
import { checkPasswordStrength } from "../../utils/checkPasswordStrength.js";

/*
* Get the HTML dom elements and save them in variables
*/
const registerForm = document.getElementById('register-form');

/*
* $params {event} - event passed to eventListener
* Registers a new user
*/
const register = async (e) => {
    e.preventDefault();

    const registerUsername = document.getElementById('register-form__username');
    const registerPassword = document.getElementById('register-form__password');
    const registerPasswordConfirm = document.getElementById('register-form__password-confirm');
    const registerEmail = document.getElementById('register-form__email');

    if ( !registerUsername.value || !registerPassword.value || !registerPasswordConfirm.value || !registerEmail.value ) {
        alert('Please fill in all fields');
        return;
    };

    const username = registerUsername.value;
    const password = registerPassword.value;
    const passwordConfirm = registerPasswordConfirm.value;
    const email = registerEmail.value;


    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    };

    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength.strength < 5) {
        alert(passwordStrength.message);
        return;
    };

    const user = {
            username,
            password,
            email
        }

    const response = await saveUser(user);
    console.log(response);
    if (response.status === 200) {
        alert('User registered');
        window.location.href = '/login';
    } else {
        alert('User already exists');
    }
}

registerForm.addEventListener('submit', (e) => {
    register(e);
    });
