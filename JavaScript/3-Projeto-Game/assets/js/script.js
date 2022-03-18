//ESCOPO GLOBAL
//DEFININDO AS DIMENSÕES DO BROWSER
let width = 0;
let height = 0;
let life = 1;
// CRONÔMETRO
let time = 20;
// NÍVEL DIFICULDADE
let createFlyTime = 1500
//SELECIONANDO APENAS A PARTIR DO ?
let lvl = window.location.search
//REMOVENDO O ?, DEIXANDO SOMENTE O NÍVEL SELECIONADO
lvl = lvl.replace('?', '')
// LÓGICA DIFICULDADE
if(lvl ==='easy'){
  createFlyTime = 1500
}else if(lvl === 'medium'){
  createFlyTime = 1000
}else if(lvl === 'hard'){
  createFlyTime = 750
}
// CRIAÇÃO DOS MOSQUITOS LEVANDO EM CONSIDERAÇÃO AO NÍVEL SELECIONADO
let createFly = setInterval(() => {
  randomPosition()
}, createFlyTime);

//ESCOPO DA FUNÇÃO
//INVOCADA NO BODY ONRESIZE
function getDimensions(){
  width = window.innerWidth;
  height = window.innerHeight;  
};

getDimensions();

//CRONÔMETRO VITÓRIA
let stopwatch = setInterval(() => { 
  time -= 1
  if(time < 0){
    clearInterval(stopwatch);
    clearInterval(createFly);
    window.location.href="winner.html";
  }else{
    document.getElementById('stopwatch').innerHTML = time;
  }
}, 1000)


//DEFININDO POSIÇÕES RANDÔMICAS

function randomPosition() {
  //REMOVER O MOSQUITO ANTERIOR (CASO EXISTA)
  //SE O ELEMENTO ANTERIOR NÃO EXISTE, NÃO ENTRARÁ NESTA LÓGICA
  //SE O USUÁRIO CLICAR, O ELEMENTO NÃO EXISTIRÁ.
  if(document.getElementById('fly')){
    document.getElementById('fly').remove();
    //ALTERANDO ORIGEM
    //ESTRUTURA PARA TORNAR O ID DINÂMICO
    //DESTA FORMA, FOI CRIADO UM CONTADOR QUE FOI CONCATENADO AO ID
    if(life > 3){
      window.location.href="gameover.html"
    }else{
    document.getElementById('life' + life).src="assets/img/coracao_vazio.png"
    life++
    };
  }
  //ARREDONDANDO PARA BAIXO FLOOR
  //-90 = MARGEM PARA O TAMANHO DA IMAGEM MOSQUITO
  let positionX = Math.floor(Math.random() * width) - 90;
  let positionY = Math.floor(Math.random() * height) - 90;
  // OPERADOR TERNÁRIO
  //LEITURA = SE POSITION FOR MENOR QUE ZERO, RECEBE 0, SENÃO RECEBE ELA MESMO
  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  //CRIANDO ELEMENTOS HTML
  let flyImg = document.createElement('img');
  flyImg.src = 'assets/img/mosca.png';
  flyImg.className = randomFlySize() + ' ' +randomSide();
  flyImg.style.left = positionX + 'px';
  flyImg.style.top = positionY + 'px';
  flyImg.style.position = 'absolute';
  flyImg.id = 'fly';

  //THIS FAZ REFERENCIA AO PROPRIO ELEMENTO HTML IMG
  flyImg.onclick = function(){
    this.remove();
  };

  //ÁRVORE DE ELEMENTOS / CHILD
  document.body.appendChild(flyImg);

 
  randomFlySize();

}

//TAMANHO RANDÔMICO PARA O MOSQUITO
//MATH.RANDOM GERA NÚMEROS ALEATÓRIO ENTRE 0 E 1
function randomFlySize(){
  let classSize = Math.floor(Math.random() * 3);

  if(classSize === 0){
    return 'fly-sm'
  }else if(classSize === 1){
    return 'fly-md'
  }else{
    return 'fly-lg'
  };

  // ALTERNATIVA AO IF
  // switch(classSize){
  //   case 0:
  //   return 'fly-sm'
  //   case 1:
  //   return 'fly-md'
  //   case 2:
  //   return 'fly-lg'
  // }
};

function randomSide(){
  let classSide = Math.floor(Math.random() * 2);

  if(classSide === 0){
    return 'side-A'
  }else{
    return 'side-B'
  };
};






