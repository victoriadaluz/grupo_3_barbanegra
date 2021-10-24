let qs = (e) => {
    return document.querySelector(e)
}
window.addEventListener("load", () => {
    let $inputName = qs("#username"),
        $nameError = qs('#usernameErrors'),
        $inputNameContainer = qs('#userInput'),
        //email inputs
        $inputEmail2 = qs("#email2"),
        $errorsEmail2 = qs("#emailErrors2"),
        $email2Container = qs('#email2Input'),
        //password register input
        $passwordContainer = qs('#passContainer'),
        $passRegister = qs('#password'),
        $passErrors = qs('#pass2Errors'),
        //password 2 register input
        $passwordContainer2 = qs('#passContainer2'),
        $passRegister2 = qs('#password2'),
        $passErrors2 = qs('#pass2Errors2'),
        $formReg = qs("registerForm"),
        /* 
         $form2 = qs("form2"); */
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;

    $inputName.addEventListener('blur', () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameError.innerHTML = 'El campo no puede estar vacio'
                $nameError.classList.add('text-red-600', 'ml-10', 'font-medium');
                $inputNameContainer.classList.remove('border-green-600')
                $inputNameContainer.classList.add('border-red-600');
                break;
            case !regExAlpha.test($inputName.value):
                $nameError.innerHTML = 'Ingresa un nombre valido'
                $nameError.classList.add('text-red-600', 'ml-10', 'font-medium');
                $inputNameContainer.classList.remove('border-green-600');
                $inputNameContainer.classList.add('border-red-600');
                break;
            case $inputName.value.trim().length <= 2:
                $nameError.innerHTML = 'El nombre debe tener mas  de 2 caracteres'
                $nameError.classList.remove('ml-16')
                $nameError.classList.add('text-red-600', 'ml-10', 'font-medium');
                $inputNameContainer.classList.remove('border-green-600');
                $inputNameContainer.classList.add('border-red-600');
                break;
            default:
                $inputNameContainer.classList.remove('border-red-600')
                $inputNameContainer.classList.add('border-green-600')
                $nameError.removeAttribute('class')
                $nameError.innerHTML = ''
                break;
        }
    })

    $inputEmail2.addEventListener('blur', () => {
        switch (true) {
            case !$inputEmail2.value.trim():
                $errorsEmail2.innerHTML = 'El campo no puede estar vacio'
                $errorsEmail2.classList.add('text-red-600', 'ml-10', 'font-medium');
                $email2Container.classList.remove('border-green-600')
                $email2Container.classList.add('border-red-600');
                break;
            case !regExEmail.test($inputEmail2.value):
                $errorsEmail2.innerHTML = 'Ingresa un email valido'
                $errorsEmail2.classList.add('text-red-600', 'ml-10', 'font-medium');
                $email2Container.classList.remove('border-green-600');
                $email2Container.classList.add('border-red-600');
                break;
            default:
                $email2Container.classList.remove('border-red-600')
                $email2Container.classList.add('border-green-600')
                $errorsEmail2.removeAttribute('class')
                $errorsEmail2.innerHTML = ''
                break;
        }
    })

    $passRegister.addEventListener('blur', () => {
        switch (true) {
            case !$passRegister.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio '
                $passErrors.classList.add('text-red-600', 'ml-10', 'font-medium');
                $passwordContainer.classList.remove('border-green-600');
                $passwordContainer.classList.add('border-red-600');
                break;
            case !regExPass.test($passRegister.value):
                $passErrors.innerHTML = 'La contraseña deber ser alfanumerica y tener entre 8 a 12 caracteres'
                $passErrors.classList.add('text-red-600', 'ml-10', 'font-medium');
                passwordContainer.classList.remove('border-green-600');
                $passwordContainer.classList.add('border-red-600');
                break;
            default:
                $passErrors.removeAttribute('class')
                $passErrors.innerHTML = '';
                $passwordContainer.classList.remove('border-red-600');
                $passwordContainer.classList.add('border-green-600');
                break;
        }
    })

    $passRegister2.addEventListener('blur', () => {
        switch (true) {
            case !$passRegister2.value.trim():
                $passErrors2.innerHTML = 'Reingresa tu contraseña';
                $passErrors2.classList.add('text-red-600', 'ml-10', 'font-medium');
                $passwordContainer2.classList.remove('border-green-600');
                $passwordContainer2.classList.add('border-red-600');
                break;
            case $passRegister.value != $passRegister2.value:
                $passErrors2.innerHTML = 'La contraseña no coinciden'
                $passErrors2.classList.add('text-red-600', 'ml-10', 'font-medium');
                $passwordContainer2.classList.remove('border-green-600');
                $passwordContainer2.classList.add('border-red-600');
                break;
            default:
                $passErrors2.removeAttribute('class')
                $passErrors2.innerHTML = '';
                $passwordContainer2.classList.remove('border-red-600');
                $passwordContainer2.classList.add('border-green-600');
                break;
        }
    })

    $formReg.addEventListener('submit',(e)=>{
        let error=false;
        e.preventDefault();
        let formEl=$formReg.element;
        for(let i=0; i<formEl.length; i++) {
            if(formEl[i] == ""){
                formEl[i].classList.add('')
            }
        }
    })
})