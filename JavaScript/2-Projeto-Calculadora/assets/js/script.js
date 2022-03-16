
let display = document.getElementById('display')

//FUNCTION COM PARÂMETROS, OS VALORES ESTÃO NOS RESPECTIVOS BOTÕES
function calc(type,value){
  analyzeButton(type,value);
}

function analyzeButton(type, value){
  if(type === 'action'){
    if( value === 'c'){
      //LIMPAR DISPLAY 
      display.value = ''
    }

    if(value === '+' || value === '-' || value === '*' || value === '/'){
      document.getElementById('display').value += value
    }

    if(value === '='){
      //EVAL = CONVERTE STRING EM OPERAÇÃO MATEMÁTICA
      let operationResult = eval(display.value)
      display.value = operationResult
    }
  }else if(type === 'value'){
    //SELECIONAR O VALOR DO DISPLAY E ATRIBUIR O VALOR DO PARÂMETRO DO BOTÃO
    display.value += value
  }
}

