const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");
const slideButton = document.querySelector("#button_transition");


function register(){
    loginForm.style.left="-450px";
    registerForm.style.left = "0";
    slideButton.style.left="102px";
}

function login(){
    loginForm.style.left="0";
    registerForm.style.left = "450px";
    slideButton.style.left="0";


}