//PROGRAMAÇÃO ORIENTADA A OBJETOS
//PILAR = ABSTRAÇÃO


//MODELO DA ENTIDADE/OBJETO(INSTÂNCIA DO MODELO);
//BOA PRÁTICA CLASS = CAMEL CASE
class ContaBancaria {
  //CONSTRUÇÃO DAS PROPRIEDADES DO MODELO(CLASS)
  constructor(){
    this.agencia = 1025
    this.numeroConta = 2845
    this.saldo = 100
    this.limite = 500
  }
  //MÉTODOS
  depositar(valorDeposito){
    this.saldo += valorDeposito;
  };

  sacar(valorSaque){
    this.saldo -= valorSaque;
  };

  consultarSaldo(){
    return this.saldo
  };
};

//INSTANCIANDO O OBJETO
//CRIANDO DOIS OBJETOS LEVANDO EM CONSIDERAÇÃO OS ATRIBUTOS DO MODELO
let x = new ContaBancaria();
let y = new ContaBancaria();

console.log(x.consultarSaldo())

x.depositar(120)
console.log(x.consultarSaldo())

x.sacar(50)
console.log(x.consultarSaldo())


//HOUVE ALTERAÇÕES NOS NÚMEROS DA IDENTIDADE X. 
//AS CARACTERISTICAS DE Y CONTINUAM DEFAULT DA CRIAÇÃO DO CONSTRUCTOR
console.log(`Identidade Y = ${y.consultarSaldo()}`)




//SOFTWARE DE MARCENARIA
//CADEIRA E SOFÁ
//PARADIGMA PROCEDURAL
//REDUNDANCIA DE CÓDIGO = VERBOSIDADE

//CADEIRA
let cadeiras = [];

cadeiras[0] = [];
cadeiras[0]['qtdePernas'] = 4;
cadeiras[0]['giratoria'] = false;
cadeiras[0]['cor'] = 'Preto';

cadeiras[1] = [];
cadeiras[1]['qtdePernas'] = 1;
cadeiras[1]['giratoria'] = true;
cadeiras[1]['cor'] = 'Vermelha';

function girarCadeira(indice){
  if(cadeiras[indice]['giratoria'] === true){
    console.log('Cadeira giratória!')
  }else{
    console.log('Cadeira não giratória!')
  }
}


function adicionarCadeira(qtdePernas, giratoria, cor){
  let cadeira = []
  cadeira['qtdePernas'] = qtdePernas;
  cadeira['giratoria'] = giratoria;
  cadeira['cor'] = cor;

  cadeiras.push(cadeira)
}


adicionarCadeira(3, false, 'Azul')

console.log(cadeiras)


//PARADIGMA OO
class Cadeira{
  constructor(descricao, qtdePernas, giratoria, cor){
    this.descricao = descricao;
    this.qtdePernas = qtdePernas;
    this.giratoria = giratoria;
    this.cor = cor;
  }
  girarCadeira(){
    if(this.giratoria === true){
      console.log('Cadeira giratória!')
    }else{
      console.log('Cadeira não giratória!')
    }
  }
}

//ADICIONARCADEIRA()
//INSTANCIANDO UM NOVO OBJETO
//PASSANDO PARÂMETROS DO CONSTRUCTOR
let sofa = new Cadeira('sofa', 2, false, 'Bege');

console.log(sofa)
//É POSSÍVEL INVOCAR MÉTODOS PASSANDO A INSTANCIA.MÉTODO()
sofa.girarCadeira()

//INSTANCIANDO OUTRO OBJETO DO MODELO CADEIRA
let poltrona = new Cadeira('poltrona',4 , true, 'Azul Marinho')
console.log(poltrona)
poltrona.girarCadeira()


//CRIANDO UM ARRAY PARA REUNIR TODAS AS INSTANCIA DE CADEIRAS
let arrCadeiras = []

arrCadeiras.push(new Cadeira('Balanço', 0, false, 'Tabacco'))

arrCadeiras.push(new Cadeira('Banquinho', 4, false, 'Cinza'))

arrCadeiras.push(new Cadeira('Poltrona de Massagem', 2, false, 'Marrom'))

console.log(arrCadeiras)

//PARADIGMA OO É MAIS SEGURO, MENOS REDUNDANCIA, MAIOR MANUTIBILIDADE

