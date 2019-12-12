function carregar() {
    let exibicao = document.querySelector('#exibicao')
    let larguraTela = window.screen.width
    console.log(larguraTela)
    if (larguraTela < 800) {
        exibicao.href = 'estiloMobile.css'
    } else {
        exibicao.href = 'estilo.css'
    }
}

carregar()