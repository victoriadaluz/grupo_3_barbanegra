/* function qs(element){
    return document.querySelector(element)
}
window.addEventListener('load', function (){
    let $inputName = qs('#unombre'),
    $nameErrors = qs('#errorNombre'),
    $inputLastName = qs('#papellido'),
    $lastNameErrors = qs('#errorApellido'),
    $inputEmail = qs('#pemail'),
    $emailErrors = qs('#errorEmail'),
    $inputTel = qs('#telefono'),
    $telErrors = qs('#errorTelefono'),
    $inputAdress = qs('#direccion'),
    $adressErrors = qs('#errorDireccion'),
    $inputNumeration = qs('#numeracion'),
    $numerationErrors = qs('#errorNumber'),
    $inputCity = qs('#ciudad'),
    $cityErrors= qs('#errorCity'),
    $inputProvince = qs('#provincia'),
    $provinceErrors = qs('#errorProvince'),
    $inputPostalCode = qs('#codigoPostal'),
    $postalCodeErrors = qs('#errorPostalCode');
    regExp = /^[A-Za-z\s ]+$/g; 
    regExp2 = /^[A-Za-z0-9\s ]+$/g; 
    regExp3 = /^[0-9]*$/;
    regExp4 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    regExp5 = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4}) $ /;

    $inputName.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp.test($inputName.value):
               $nameErrors.innerHTML = 'El nombre es incorrecto'
               $nameErrors.classList.add('errorV')
               $inputName.classList.add('errorVI')
                break;
             
        
                default:
                    $nameErrors.classList.remove('errorV')
                    $inputName.classList.remove('errorVI')
                    $inputName.classList.add('checkV')
                    $nameErrors.innerHTML = ''
                    break;
        }
    })
    $inputLastName.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp.test($inputLastName.value):
               $lastNameErrors.classList.add('errorV')
               $inputLastName.classList.add('errorVI')
               $lastNameErrors.innerHTML = 'El apellido es incorrecto'
               break;
             
        
                default:
                    $lastNameErrors.classList.remove('errorV')
                    $inputLastName.classList.remove('errorVI')
                    $inputLastName.classList.add('checkV')
                    $lastNameErrors.innerHTML = ''
                    break;
        }
    })
    $inputEmail.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp4.test($inputEmail.value):
                $emailErrors.innerHTML = 'El email es incorrecto'
                $emailErrors.classList.add('errorV')
                $inputEmail.classList.add('errorVI')
                break;
             
        
                default:
                    $emailErrors.classList.remove('errorV')
                    $inputEmail.classList.remove('errorVI')
                    $inputEmail.classList.add('checkV')
                    $emailErrors.innerHTML = ''
                    break;
        }
    })
    $inputTel.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp4.test($inputTel.value):
                $telErrors.innerHTML = 'El número telefónico es incorrecto'
                $telErrors.classList.add('errorV')
                $inputTel.classList.add('errorVI')
                break;
             
        
                default:
                    $telErrors.classList.remove('errorV')
                    $inputTel.classList.remove('errorVI')
                    $inputTel.classList.add('checkV')
                    $telErrors.innerHTML = ''
                    break;
        }
    })
    $inputAdress.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp.test($inputAdress.value):
                $adressErrors.innerHTML = 'La dirección es incorrecta'
                $adressErrors.classList.add('errorV')
                $inputAdress.classList.add('errorVI')
                break;
             
        
                default:
                    $adressErrors.classList.remove('errorV')
                    $inputAdress.classList.remove('errorVI')
                    $inputAdress.classList.add('checkV')
                    $adressErrors.innerHTML = ''
                    break;
        }
    })
    $inputNumeration.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp3.test($inputNumeration.value):
                $numerationErrors.innerHTML = 'La numeración es incorrecta'
                $numerationErrors.classList.add('errorV')
                $inputNumeration.classList.add('errorVI')
                break;
             
        
                default:
                    $numerationErrors.classList.remove('errorV')
                    $inputNumeration.classList.remove('errorVI')
                    $inputNumeration.classList.add('checkV')
                    $numerationErrors.innerHTML = ''
                    break;
        }
    })
    $inputCity.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp.test($inputCity.value):
                $cityErrors.innerHTML = 'La ciudad es incorrecta'
                $cityErrors.classList.add('errorV')
                $inputCity.classList.add('errorVI')
                break;
             
        
                default:
                    $cityErrors.classList.remove('errorV')
                    $inputCity.classList.remove('errorVI')
                    $inputCity.classList.add('checkV')
                    $cityErrors.innerHTML = ''
                    break;
        }
    })
    $inputProvince.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp.test($inputProvince.value):
                $provinceErrors.innerHTML = 'La provincia es incorrecta'
                $provinceErrors.classList.add('errorV')
                $inputProvince.classList.add('errorVI')
                break;
             
        
                default:
                    $provinceErrors.classList.remove('errorV')
                    $inputProvince.classList.remove('errorVI')
                    $inputProvince.classList.add('checkV')
                    $provinceErrors.innerHTML = ''
                    break;
        }
    })
    $inputPostalCode.addEventListener('blur', ()=>{
        switch (true) {
           case !regExp3.test($inputPostalCode.value):
                $postalCodeErrors.innerHTML = 'El código postal es incorrecto'
                $postalCodeErrors.classList.add('errorV')
                $inputPostalCode.classList.add('errorVI')
                break;
             
        
                default:
                    $postalCodeErrors.classList.remove('errorV')
                    $inputPostalCode.classList.remove('errorVI')
                    $inputPostalCode.classList.add('checkV')
                    $postalCodeErrors.innerHTML = ''
                    break;
        }
    })
}) */