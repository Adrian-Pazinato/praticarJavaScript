function abrirGaleria() {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.addEventListener('change', () =>{
        const file = input.files[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            const imagem = document.getElementById('imagem')
            imagem.src = reader.result
        }
        )
        reader.readAsDataURL(file)
    }
    )
    input.click()
}
