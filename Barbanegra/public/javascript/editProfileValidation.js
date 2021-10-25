
let qs = (e) => {
    return document.querySelector(e)
}
window.addEventListener('load', () =>{
    let $inputEditName = qs('#editName'),
    $editNameErrors = qs('#errorsNombre'),
    $inputEditNameContainer = qs('#unombre'),
    $inputEditLastName = qs ('#editLastName'),
    $editLastNameErrors = qs('#errorsApellido'),
    $inputEditLastNameContainer = qs('#papellido'),
    $formEditUser = qs ('#formEditUser')
$inputEditName.addEventListener('blur', () => {
    switch(true){
        case !$inputEditName.value.trim():
            $editNameErrors.innerHTML = 'Debes ingresar un nombre' 
            $editNameErrors.classList.add('text-red-600', 'ml-10', 'font-medium')
            $inputEditNameContainer.classList.remove('border-green-600')
            $inputEditNameContainer.classList.add('border-red-600');
            break;
        case !regExAlpha.test($inputName.value):
            $editNameErrors.innerHTML = 'Ingresa un nombre valido'
            $editNameErrors.classList.add('text-red-600', 'ml-10', 'font-medium');
            $inputEditNameContainer.classList.remove('border-green-600');
            $inputEditNameContainer.classList.add('border-red-600');
            break;
        case $inputEditName.value.trim().length <= 2:
            $editNameErrors.innerHTML = 'El nombre debe tener mas  de 2 caracteres'
            $editNameErrors.classList.remove('ml-16')
            $editNameErrors.classList.add('text-red-600', 'ml-10', 'font-medium');
            $inputEditNameContainer.classList.remove('border-green-600');
            $inputEditNameContainer.classList.add('border-red-600');
            break;
        default:
            $inputEditNameContainer.classList.remove('border-red-600')
            $inputEditNameContainer.classList.add('border-green-600')
            $editNameErrors.removeAttribute('class')
            $editNameErrors.innerHTML = ''
            break;
    }
    
})
$inputEditLastName.addEventListener('blur', () => {
    switch(true){
        case !$inputEditLastName.value.trim():
            $editLastNameErrors.innerHTML = 'Debes ingresar un nombre' 
            $editLastNameErrors.classList.add('text-red-600', 'ml-10', 'font-medium')
            $inputEditLastNameContainer.classList.remove('border-green-600')
            $inputEditLastNameContainer.classList.add('border-red-600');
            break;
        case !regExAlpha.test($inputName.value):
            $editLastNameErrors.innerHTML = 'Ingresa un nombre valido'
            $editLastNameErrors.classList.add('text-red-600', 'ml-10', 'font-medium');
            $inputEditLastNameContainer.classList.remove('border-green-600');
            $inputEditLastNameContainer.classList.add('border-red-600');
            break;
        case $inputEditLastName.value.trim().length <= 2:
            $editLastNameErrors.innerHTML = 'El nombre debe tener mas  de 2 caracteres'
            $editLastNameErrors.classList.remove('ml-16')
            $editLastNameErrors.classList.add('text-red-600', 'ml-10', 'font-medium');
            $inputEditLastNameContainer.classList.remove('border-green-600');
            $inputEditLastNameContainer.classList.add('border-red-600');
            break;
        default:
            $inputEditLastNameContainer.classList.remove('border-red-600')
            $inputEditLastNameContainer.classList.add('border-green-600')
            $editLastNameErrors.removeAttribute('class')
            $editLastNameErrors.innerHTML = ''
            break;
    }
    console.log($editNameErrors)
})

$formEditUser.addEventListener('submit',(e)=>{
    let error=false;
    e.preventDefault();        
    let elementsForm=$formEditUser.elements;
    for(let i=0; i<elementsForm.length; i++) {
        if(elementsForm[i].value == ""){
            elementsForm[i].classList.add('text-red-600', 'ml-10', 'font-medium')
            $submitLoginErrors.innerHTML = 'Quedaron campos sin completar!'
            $submitLoginErrors.classList.add('text-red-600', 'ml-10', 'font-medium')
            error=true;
        }
    }
    if(!error){
        console.log('ok');
        $formEditUser.submit()
    };
})
})