//SIMULAÇÃO VIDEOS NO YT
//ARRAY1
let video = [];

//ARRAY2 CONTIDO NO ARRAY1 NA POSIÇÃO DE INDICE 1
video[1] = [];
video[1]['nome'] = 'Curso em Video';
video[1]['categoria'] = 'Educação';

//FUNTION PARA RECUPERAR O VÍDEO E EXIBIR PARA O USUÁRIO
//REQUISIÇÃO HTTP
function getVideo(video){
  //CÓDIGOS PASSIVOS DE ERRO
try{
 //UNDEFINED
 console.log(video[0]);
 //ERRO QUE INTERROMPE O SCRIPT POIS A PROPRIEDADE DE UM UNDEFINED NÃO EXISTE
 console.log(video[0]['nome']);
} catch(e){
  sendError(e);
  //RECEBE O ERRO (POR PARÂMETRO) PARA QUE O FLUXO DA APLICAÇÃO NÃO QUEBRE
  console.log('Com o CATCH podemos explorar e tratar os erros')
} finally{
  console.log('Sempre irá passar pelo finally')
}
console.log('A aplicação seguiu o fluxo por causa do tratamento do erro')
}


//ENVIAR OS LOGS DO ERRO PARA O SERVIDOR
function sendError(e){
  //LÓGICA 
  //STRING DO ERRO CAPTURADO
  console.log(e)
}

getVideo(video);

//FORÇANDO UM ERRO
//THROW LANÇA UM ERRO E FAZ COM QUE A APLICAÇÃO PARE E EXIBA UMA MENSAGEM PERSONALIZADA
//O CÓDIGO DA APLICAÇÃO ANTERIOR AO THROW É EXECUTADA NORMALMENTE.
throw new Error('Ocorreu um erro, mas não se preocupe, estamos trabalhando nisso. Em instantes, seu app estará funcionando normalmente');