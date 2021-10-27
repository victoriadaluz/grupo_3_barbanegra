
function qs(element){
    return document.querySelector(element)
}
window.addEventListener('load', function (){
    let
    $file = qs('#file'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview')
    
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
}) 