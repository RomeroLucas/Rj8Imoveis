//BOTÃO PARA NEGAÇÃO MOBILE
var btnNav = document.querySelector("#btnNav");
var navMobile = document.querySelector("#navMenuMobile");
var itensMenu = document.querySelector("#itensMenu");
/*esta variavel serve para indicar se o botão foi pressionado ou não
quando gatilhoNav receber 0 significa que o menu está fechado se receber 1 significa 
que está aberto*/
var gatilhoNav = 0

function abreMenu() {
    
    if (gatilhoNav == 0) {
        btnNav.src = "img/fechaMenu.png";
        navMobile.style.height = "55em";
        navMobile.style.borderBottom = "3px solid black";
        itensMenu.style.display = "block";
        gatilhoNav = 1
    }else {
        btnNav.src = "img/menuNav.png";
        navMobile.style.height = "10em";
        navMobile.style.borderBottom = "unset";
        itensMenu.style.display = "none";
        gatilhoNav = 0
    }

}


//BOTÃO PARA NAVEGAÇÃO DESKTOP

var botao = document.querySelector('header')
var navItens = document.querySelector('#navMenuDesktop')


function abreNav() {
    botao.style.width = '32em'
    botao.style.height = '52em'
    botao.style.backgroundImage = 'unset'
    botao.style.opacity = 'unset'
    botao.style.cursor ='unset'
    navItens.style.display = 'block'
}

botao.addEventListener('click', abreNav)