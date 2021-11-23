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
    //previsualizacion de imagen al editar/agregar
    $file = qs('#file'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview')
    $productDescriptionErrors = qs ('#descriptionErrors');
    regExp = /^[A-Za-z\s ]+$/g; 
    regExp2 = /^[A-Za-z0-9\s ]+$/g; 
    regExp3 = /^[0-9]*$/;
    
    //prewiew img 
    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value,
            allowefExtensions = /(.jpg|.jpeg|.png)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = `${iconError} Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png)`;
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    });


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
                    $productDiscountErrors.innerHTML = 'El precio del producto es incorrecto, ingrese sólo números.'
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
                $inputProductDescription.classList.remove('errorVI')
                $inputProductDescription.classList.add('checkV')
                $productDescriptionErrors.innerHTML = ''
                break;
        }
    })
}) 