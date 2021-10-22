/*CHICOS voy a ir probando a ver como van estas validaciones aunque sea para tener algo, si noquedan vamos viendo */

/**agregar etiquetas a los input
 *el 1 es del LOGIN: solo mail y pass
 * el 2 es del REGISTRO: username, mail, pass y pass2
 */
window.addEventListener("load", () => {
    let $inputEmail1 = document.querySelector("#email1"),
    $inputPass1 = document.querySelector("#pass1"),
    $inputPass2 = document.querySelector("#pass2"),
    $username = document.querySelector("#username"),
    $usernameErrors = document.querySelector("#usernameErrors"),
    $inputEmail2 = document.querySelector("#email2"),
    $errorsEmail = document.querySelector("#errorsEmail"),
    $errorsEmail2 = document.querySelector("#errorsEmail2")
    $errorsPass1 = document.querySelector("#errorsPass1"),
    $errorsPass2 = document.querySelector("#errorsPass2"),
    $submitButton = document.querySelector(".enviar"),
    $form1 = document.querySelector("form1"),
    $form2 = document.querySelector("form2");

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;

    $username.addEventListener("blur",() => {
        switch (true) { // 
            case !$username.value.trim():
                $usernameErrors.innerHTML = `El nombre de usuario es obligatiorio`
                $username.style.borderColor = "red"
                break;
            case !regExAlpha.test($username.value):
                $errorsName.innerHTML = `Ingrese un nombre de usuario valido`
                $username.style.borderColor = "red"
                break;
            default:
                $inputName.style.borderColor = "#87ed6f"
                $errorsName.innerHTML = ""
                break;
        }
    })
    $inputEmail2.addEventListener("blur",() => {
        switch (true) { 
            case !$inputEmail2.value.trim():
                $errorsEmail2.innerHTML = `El mail es obligatorio`
                $inputEmail2.style.borderColor = "red"
                break;
            case !regExAlpha.test($inputEmail2.value):
                $errorsEmail2.innerHTML = `Ingresa un mail valido`
                $inputEmail2.style.borderColor = "red"
                break;
            default:
                $inputEmail2.style.borderColor = "#87ed6f"
                $errorsEmail2.innerHTML = ""
                break;
        }
    })
    $inputEmail1.addEventListener("blur",() => {
        switch (true) {
            case !$inputEmail1.value.trim():
                $errorsEmail.innerHTML = ` El campo E-mail es obligatorio`
                $inputEmail1.style.borderColor = "red"
                break;
            case !regExEmail.test($inputEmail1.value):
                $errorsEmail.innerHTML = ` Ingresa un E-mail valido`
                $inputEmail1.style.borderColor = "red"
                break;
            default:
                $inputEmail1.style.borderColor = "#87ed6f"
                $errorsEmail.innerHTML = ""
                break;
        }
    })
    $inputPass1.addEventListener("blur",() => {
        switch (true) {
            case !$inputPass1.value.trim():
                $errorsPass.innerHTML = ` El campo contraseña es obligatorio`
                $inputPass1.style.borderColor = "red"
                break;
            case !regExPass.test($inputPass1.value):
                $errorsPass.innerHTML = ` La contraseña debe tener minimo 8 caracteres `
                $inputPass1.style.borderColor = "red"
                break;
            default:
                $inputPass1.style.borderColor = "#87ed6f"
                $errorsPass.innerHTML = ""
                break;
        }
    })
    $inputPass2.addEventListener("blur",() => {
        switch (true) {
            case !$inputPass2.value.trim():
                $errorsPass2.innerHTML = ` Debes reingresar tu contraseña`
                $inputPass2.style.borderColor = "red"
                break;
            case $inputPass2.value != $inputPass2.value:
                $errorsPass2.innerHTML = ` Las contraseñas no coinciden`
                $inputPass2.style.borderColor = "red"
                break;
            default:
                $inputPass2.style.borderColor = "#87ed6f"
                $errorsPass2.innerHTML = ""
                break;
        }
    })
})
/*
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros. */




