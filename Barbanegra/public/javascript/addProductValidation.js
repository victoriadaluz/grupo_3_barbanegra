function qs(element){
    return document.querySelector(element)
}
window.addEventListener('load', function (){
    let $inputProductName = qs('#inputName'),
    $productNameErrors = qs ('#productNameErrors'),
    $inputProductBrand = qs('#inputBrand'),
    $productBrandErrors = qs ('#productBrandErrors'),
    $inputProductPrice = qs('#inputPrice'),
    $productPriceErrors = qs ('#priceErrors'),
    $inputProductDiscount = qs('#inputDiscount'),
    $productDiscountErrors = qs ('#discountErrors'),
    $inputProductDescription = qs ('#validationTextarea'),
    $productDescriptionErrors = qs ('#descriptionErrors');
    regExp = /^[A-Za-z\s ]+$/g; 
    regExp2 = /^[A-Za-z0-9\s ]+$/g; 
    regExp3 = /^[0-9]*$/;
    

    $inputProductName.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductName.value.trim():
                $productNameErrors.innerHTML = 'El nombre del producto es obligatorio'
                $productNameErrors.classList.add('errorV')
                $inputProductName.classList.add('errorVI')
                break;
        case !regExp.test($inputProductName.value):
                    $productNameErrors.innerHTML = 'El nombre del producto es incorrecto'
                    $productNameErrors.classList.add('errorV')
                    $inputProductName.classList.add('errorVI')
                    break;
        
            default:
                $productNameErrors.classList.remove('errorV')
                $inputProductName.classList.remove('errorVI')
                $inputProductName.classList.add('checkV')
                $productNameErrors.innerHTML = ''
                break;
        }
    })
    $inputProductBrand.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductBrand.value.trim():
                $productBrandErrors.innerHTML = 'La marca del producto es obligatoria'
                $productBrandErrors.classList.add('errorV')
                $inputProductBrand.classList.add('errorVI')
                break;
                case !regExp.test($inputProductBrand.value):
                    $productBrandErrors.innerHTML = 'La marca del producto es incorrecta'
                    $productBrandErrors.classList.add('errorV')
                    $inputProductBrand.classList.add('errorVI')
                    break;
            default:
                $productBrandErrors.classList.remove('errorV')
                $productBrandErrors.innerHTML = ''
                $inputProductBrand.classList.add('errorVI')
                $inputProductBrand.classList.add('checkV')
                break;
        }
    })
    $inputProductPrice.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductPrice.value.trim():
                $productPriceErrors.innerHTML = 'Debe ingresar el precio del producto'
                $productPriceErrors.classList.add('errorV')
                $inputProductPrice.classList.add('errorVI')
                break;
                case !regExp3.test($inputProductPrice.value):
                    $productPriceErrors.innerHTML = 'El precio del producto es incorrecto, ingrese sólo números.'
                    $productPriceErrors.classList.add('errorV')
                    $inputProductPrice.classList.add('errorVI')
                    break;
        
            default:
                $productPriceErrors.classList.remove('errorV')
                $inputProductPrice.classList.remove('errorVI')
                $inputProductPrice.classList.add('checkV')
                $productPriceErrors.innerHTML = ''
                break;
        }
    })
    $inputProductDiscount.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductDiscount.value.trim():
                $productDiscountErrors.innerHTML = 'Si no tiene descuento ponga el número 0'
                $productDiscountErrors.classList.add('errorV')
                $inputProductDiscount.classList.add('errorVI')
                break;
            case !regExp3.test($inputProductDiscount.value):
                    $productDiscountErrors.innerHTML = 'El descuento del producto es incorrecto, ingrese sólo números.'
                    $productDiscountErrors.classList.add('errorV')
                    $inputProductDiscount.classList.add('errorVI')
                    break;
        
            default:
                $productDiscountErrors.classList.remove('errorV')
                $inputProductDiscount.classList.remove('errorVI')
                $inputProductDiscount.classList.add('checkV')
                $productDiscountErrors.innerHTML = ''
                break;
        }
    })
    $inputProductDescription.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductDescription.value.trim():
                $productDescriptionErrors.innerHTML = 'La descripción del producto es obligatoria'
                $productDescriptionErrors.classList.add('errorV')
                $inputProductDescription.classList.add('errorVI')
                break;
        
            default:
                $productDescriptionErrors.classList.remove('errorV')
                $productDescriptionErrors.innerHTML = ''
                $inputProductDescription.classList.remove('errorVI')
                $inputProductDescription.classList.add('checkV')
                break;
        }
    })
} )