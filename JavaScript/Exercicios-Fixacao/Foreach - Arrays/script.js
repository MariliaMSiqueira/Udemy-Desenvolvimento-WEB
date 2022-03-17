//FOREACH É UM MÉTODO PARA ARRAYS
//NECESSÁRIO ÍNDICES >= 0;
let listaObjetos = ['Mouse', 'Cadeira', 'Teclado', 'Monitor', 'VideoGame', 'Fitas RGB'];

//FOREACH ACEITA UM CALLBACK
//CALLBACK COM 3 ARGS = VALOR, INDICE E ARRAY
listaObjetos.forEach(function(valor, indice, array){
  //DESTA FORMA SERÁ IMPRESSO O VALOR E OS INDICES DO ARR LISTAOBJETOS
  console.log(valor, indice);

  //ATUANDO SOBRE O PRÓRPIO ARR
  //QUANDO O VALOR CORRESPONDER A CADEIRA, O VALOR CONTIDO NO INDICE SERÁ SUBSTITUÍDO POR "CADEIRA GAMER"
  if(valor === 'Cadeira'){
    array[indice] = "Cadeira Gamer";
    console.log(array);
  };
});


//BOAS PRÁTICAS É ENCAMINHAR O CALLBACK COMO VARIÁVEL
//WRAPPER
listaMetas = ['Aprender REACT', 'Finalizar meu site', 'Elaborar tutoriais', 'Auxiliar novos DEVs'];

let valuesArr = function(valor, indice){
  console.log(`Índice : ${indice} | Valor: ${valor}`);
};

//COM O CALLBACK ENCAPSULADO EM UMA VARIÁVEL, TORNA-SE VIÁVEL UTILIZA-LO EM TRATAMENTO DE OUTROS ARRs
listaMetas.forEach(valuesArr);
listaObjetos.forEach(valuesArr);