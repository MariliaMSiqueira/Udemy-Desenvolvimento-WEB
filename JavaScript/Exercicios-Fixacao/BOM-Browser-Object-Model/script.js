//WINDOW
//CONSULTAR A DOCUMENTAÇÃO PARA VER TODOS OS PARÂMETROS POSSÍVEIS
//NECESSÁRIO ATRIBUIR O POPUP A UMA VARIÁVEL PARA QUE SEJA POSSÍVEL RECUPERA-LA PARA UTILIZAR O .CLOSE()
let popUp;
function openPopUp(){
  popUp = window.open('http://www.google.com','new_window' ,'width=850px, height= 600px');
};

function closePopUp(){
  popUp.close();
};

//SCREEN
//AVAIL HEIGHT E WIDTH = EXCLUI A BARRA DE TAREFAS
//É ATUALIZADO COM RELAÇÃO AO DEVICE SELECIONADO NO TOGGLER DEVICE TOOLBAR 
let height = window.screen.availHeight
let width = window.screen.availWidth

document.write(`A potencial altura do navegador é ${height} <br/> A potencial largura do navegador é ${width}`);

//LOCATION / URL 
function openURL(){
  let google = window.location.href="http://google.com"
}

//TIMING
//EXECUTA UMA AÇÃO UMA VEZ APÓS O TEMPO DETERMINADO
// setTimeout(function(){ document.write('testando o timming')}, 2000);
// clearTimeout()

//SEMPRE EXECUTA A AÇÃO APÓS O PERÍODO INFORMADO
let i = 100
//A CADA 1s A FUNCTION É EXECUTADA DECREMENTANDO 20 DA VARIÁVEL(CRONOMETRO)
//QUANDO A VARIÁVEL CHEGAR A 0, A PÁGINA É ATUALIZADA, COM ISSO, DE FORMA PROGRAMÁTICA, É POSSÍVEL MANTER O SITE SEMPRE ATUALIZADO OU ENCERRAR SESSÕES APÓS UM PERÍODO DE TEMPO.

setInterval(function(){
  document.write(i + '<br>');
  i -= 20;
  if(i === 0 ){

    // window.location.reload();
  }
}, 1000);

//O CLEARINTERVAL PRECISA DO PARÂMETRO DE QUAL FUNCTION ELE IRÁ ENCERRAR.
//NECESSÁRIO UTILIZAR O WRAPPER PARA O SETINTERVAL

var timming = setInterval(() => {
  document.write('Testando o Clear <br>')
  if(i === 0) {
    clearInterval(timming);
  }
}, 1000);


