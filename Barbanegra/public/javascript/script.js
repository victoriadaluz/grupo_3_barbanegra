const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const lcontainer = document.querySelector(".lcontainer");

sign_up_btn.addEventListener("click", () => {
  lcontainer.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  lcontainer.classList.remove("sign-up-mode");
});


/* SCRIPT ANTERIOR 
//esto sirve para hacer la transición del overlayer login/signup

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
window.addEventListener('load', () =>{
    signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
    signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active')); 
});
 */
