
window.addEventListener('load', function(){
  fetch('http://localhost:3300/api/productos')
  .then(res => res.json())
  .then(data=>{
      console.log(data.data)   
  
      let $form = document.querySelector('#form-delete-admin') 
      let $click = document.querySelector('#deleteUserBtn')
   
      $click.addEventListener('click',(e)=>{
        e.preventDefault();
          let productoId = data.data.find((producto)=> producto.name);
          console.log(productoId)      
                
          Swal.fire({
              title: `Estas seguro de eliminar el producto: ${productoId.name}`,
              text: "Una ves eliminado, se renderizara de vuelta esta vista",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmar!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success',
                  $form.submit()
                )
              }
            })
      })
  })
    
})

