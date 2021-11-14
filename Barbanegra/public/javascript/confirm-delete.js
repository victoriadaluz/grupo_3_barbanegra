window.addEventListener('load', function () {  
      //live search on admin
      let $search = document.querySelector('#input-search')
      let $result = document.querySelectorAll('#results')
      $search.addEventListener('keyup', function (e) {
        console.log(e)
        if (e.target.value == $search.value) {
          if (e.key === 'Escape') {
            e.target.value = ''
          }
          $result.forEach(resultado => {
            if (resultado.textContent.toLocaleLowerCase().includes(e.target.value)) {
              resultado.classList.remove('liveSearch')
            } else {
              resultado.classList.add('liveSearch')
            }
          })
        }
      })

      
      let $form = document.querySelectorAll('#form-delete-admin') 
      let $name = document.querySelector('#name-product')      
     
      $form.forEach(resultado=>{
        resultado.addEventListener('submit',(e)=>{
          console.log($name)
          e.preventDefault();  
            Swal.fire({
                title: 'Estas seguro de eliminar este producto',
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
                    resultado.submit()
                  )
                }
              })
        })
    })

     




})