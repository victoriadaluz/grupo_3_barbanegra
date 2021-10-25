const $form = document.querySelector('#formularioo')
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarme, estaremos en contacto')
    }
}