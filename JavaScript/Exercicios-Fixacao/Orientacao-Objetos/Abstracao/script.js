//EXERCÍCIO PROPOSTO NA ES6 - PARADIGMA OO / PILAR ABSTRAÇÃO
//EXERCITAR CRIAÇÃO DE UM MODELO DE POLTRONA 
//PARÂMETROS  = MACIEZ/QTDE DE LUGARES/RECLINAVEL/COR
//ADICIONAR EM UM ARRAY AS NOVAS INSTANCIAS

class Poltrona{
  constructor(maciez, qtdeLugares, cor, reclinavel){
    this.maciez = maciez;
    this.qtdeLugares = qtdeLugares;
    this.cor = cor;
    this.reclinavel = reclinavel;
  }

  retratil(){
    if(this.reclinavel === true){
      console.log("A poltrona é reclinável!");
    }else{
      console.log("A poltrona não é reclinável!");
    }
  }
}

let poltronas = []

poltronas.push(new Poltrona('Alta', 4, 'Preto', true));
poltronas.push(new Poltrona('Média', 6, 'Azul', false));
poltronas.push(new Poltrona('Baixa', 8, 'Roxo Escuro', true));

poltronas[0].retratil()
console.log(poltronas);


//SUCESSOOO, FIZ SOZINHA, TOTALMENTE SEM CONSULTA <3
