
/* AQUI ESTÃO ARMAZENADOS OS APTOS E SUAS IMAGENS */
var soul = [
    "url(img/apto/soul/gen1.jpg)",
    "url(img/apto/soul/gen2.jpg)",
    "url(img/apto/soul/gen3.jpg)",
    "url(img/apto/soul/gen4.jpg)",
    "url(img/apto/soul/gen5.jpg)",
    "url(img/apto/soul/gen6.jpg)",
    "url(img/apto/soul/gen7.jpg)",
    "url(img/apto/soul/gen8.jpg)",
    "url(img/apto/soul/gen9.jpg)",
    "url(img/apto/soul/gen10.jpg)",
    "url(img/apto/soul/gen11.jpg)",
    "url(img/apto/soul/gen12.jpg)",
    "url(img/apto/soul/gen13.jpg)",
    "url(img/apto/soul/gen14.jpg)",
    "url(img/apto/soul/gen15.jpg)",
    "url(img/apto/soul/gen15.jpg)",
    
];

var viure = [
    "url(img/apto/viure/gen2.jpg)",
    "url(img/apto/viure/gen5.jpg)",
    "url(img/apto/viure/gen11.jpg)",
    "url(img/apto/viure/gen12.jpg)",
    "url(img/apto/viure/gen13.jpg)",
    "url(img/apto/viure/gen14.jpg)",
    "url(img/apto/viure/gen22.jpg)",
    "url(img/apto/viure/gen16.jpg)",
    "url(img/apto/viure/gen24.jpg)",
    "url(img/apto/viure/gen25.jpg)",
    "url(img/apto/viure/gen26.jpg)",
    "url(img/apto/viure/gen27.jpg)",
    "url(img/apto/viure/gen29.jpg)",
    "url(img/apto/viure/gen30.jpg)",
    "url(img/apto/viure/gen31.jpg)",
    "url(img/apto/viure/gen31.jpg)",
   
];

var saintMichel = [
    "url(img/apto/saintMichel/gen7.jpg)",
    "url(img/apto/saintMichel/gen2.jpg)",
    "url(img/apto/saintMichel/gen10.jpg)",
    "url(img/apto/saintMichel/gen12.jpg)",
    "url(img/apto/saintMichel/gen17.jpg)",
    "url(img/apto/saintMichel/gen24.jpg)",
    "url(img/apto/saintMichel/gen29.jpg)",
    "url(img/apto/saintMichel/gen25.jpg)",
    "url(img/apto/saintMichel/gen26.jpg)",
    "url(img/apto/saintMichel/gen30.jpg)",
    "url(img/apto/saintMichel/gen31.jpg)",
    "url(img/apto/saintMichel/gen28.jpg)",
    "url(img/apto/saintMichel/gen33.jpg)",
    "url(img/apto/saintMichel/gen32.jpg)",
    "url(img/apto/saintMichel/gen34.jpg)",
    "url(img/apto/saintMichel/gen34.jpg)",
  
]

/* AQUI ESTÃO SELECIONADAS AS TAGS QUE SERÃO USADAS NO SLIDER  */
var slider1 = document.querySelector("#ex1");
var slider2 = document.querySelector("#ex2");
var slider3 = document.querySelector("#ex3");
var btnEsquerdo = document.querySelectorAll(".exBtnEsquerdo");
var btnDireito = document.querySelectorAll(".exBtnDireito");
var num = 0;


/* AQUI ESTÁ O RESULTADO DE QUANDO OS BOTÕES SÃO CLICADOS */
function voltar(empreendimento) {
    
    num--;
    console.log(num);
    if(num <= 0) {
        num = empreendimento.length-1;
    }
    if(empreendimento ==  saintMichel) {
        slider1.style.backgroundImage = empreendimento[num];
    }
    if(empreendimento == viure) {
        slider2.style.backgroundImage = empreendimento[num];
    }
    if(empreendimento == soul) {
        slider3.style.backgroundImage = empreendimento[num];
    }
}

function avancar(empreendimento) {

    num++;
    console.log(num);
    if(num >= empreendimento.length) {
        num = 0;
    }
    if(empreendimento == saintMichel) {
        slider1.style.backgroundImage = empreendimento[num];
    }
    if(empreendimento == viure) {
        slider2.style.backgroundImage = empreendimento[num];
        
    }
    if(empreendimento == soul) {
        slider3.style.backgroundImage = empreendimento[num];
        
    }
}