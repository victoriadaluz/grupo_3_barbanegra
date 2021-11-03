let $button = document.querySelector('#deleteUserBtn')
$button.addEventListener('click', function(e){
    let answer = confirm('¿Estás seguro/a de eliminar el usuario?');
    if(answer)
{
    
}else{
    e.preventDefault();
}
})