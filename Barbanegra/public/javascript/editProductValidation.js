function qs(element){
    return document.querySelector(element)
}
window.addEventListener('load', function (){
    let $inputProductName = qs('#productName'),
    $productNameErrors = qs ('#productNameErrors'),
    $inputProductPrice = qs('#inputPrice'),
    $productPriceErrors = qs ('#priceErrors'),
    $inputProductDiscount = qs('#inputDiscount'),
    $productDiscountErrors = qs ('#discountErrors'),
    $inputProductDescription = qs ('#textDescription'),
    $productDescriptionErrors = qs ('#descriptionErrors');
    regExp = /^[A-Za-z\s ]+$/g; 
    regExp2 = /^[A-Za-z0-9\s ]+$/g; 
    

    $inputProductName.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductName.value.trim():
                $productNameErrors.innerHTML = 'El nombre del producto es obligatorio'
                $productNameErrors.classList.add('errorV')
                break;
        case !regExp.test($inputProductName.value):
                    $productNameErrors.innerHTML = 'El nombre del producto es incorrecto'
                    $productNameErrors.classList.add('errorV')
                    break;
        
            default:
                $productNameErrors.classList.remove('errorV')
                $productNameErrors.innerHTML = ''
                break;
        }
    })
    $inputProductPrice.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductPrice.value.trim():
                $productPriceErrors.innerHTML = 'Debe ingresar el precio del producto'
                $productPriceErrors.classList.add('errorV')
                break;
        
            default:
                $productPriceErrors.classList.remove('errorV')
                $productPriceErrors.innerHTML = ''
                break;
        }
    })
    $inputProductDiscount.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductDiscount.value.trim():
                $productDiscountErrors.innerHTML = 'Si no tiene descuento ponga el número 0'
                $productDiscountErrors.classList.add('errorV')
                break;
        
            default:
                $productDiscountErrors.classList.remove('errorV')
                $productDiscountErrors.innerHTML = ''
                break;
        }
    })
    $inputProductDescription.addEventListener('blur', () =>{
        switch (true) {
            case !$inputProductDescription.value.trim():
                $productDescriptionErrors.innerHTML = 'La descripción del producto es obligatoria'
                $productDescriptionErrors.classList.add('errorV')
                break;
        
            default:
                $productDescriptionErrors.classList.remove('errorV')
                $productDescriptionErrors.innerHTML = ''
                break;
        }
    })
} )