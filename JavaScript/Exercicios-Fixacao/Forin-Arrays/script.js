let listaPessoas = ['Marília', 'Mariana', 'Claudia', 'Fabiano', 'Ned', 'Nathy'];
console.log(listaPessoas);

//A VARIÁVEL X RECEBE O VALOR DO ÍNDICE, COM ISSO, CASO OS ÍNDICES NÃO ESTEJAM SEQUENCIADOS, COM O FOR IN EVITA-SE ERROS INESPERADOS.
for(let x in listaPessoas ){  
  //IMPRIMIR O CONTEUDO DA VARIÁVEL QUE PERCORREU O ARRAY
  console.log(listaPessoas[x]);
  //IMPRIMIR OS ÍNDICES
  console.log(x);
  //CONCATENANDO RESULTADOS
  console.log('Índice: ' + x + ' // Valor : ' + listaPessoas[x]);
};