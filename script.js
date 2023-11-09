  /* FUNCTION DECLARATION:
teste('Paulo')      *HOISTING -> Chamada da função antes dela ter sido declarada. Apenas a function declaration aceita.
function teste (nome){
    console.log('function declaration', nome)
} */



  /* FUNCTION EXPRESSION:
const teste = function(nome){
    console.log('function expression', nome)
}
teste('Paulo') */




  /* ARROW FUNCTION:
const teste = (nome) => {
    console.log('arrow function', nome)
}
teste('Paulo') */




  /* FACTORY FUNCTION: -> RETORNA APENAS UM OBJETO.
const factoryFunction = (name) => {
    return {
        logou: () => alert(`O usuário ${name} logou!`),
        deslogou: () => alert(`O usuário ${name} deslogou!`),
    }
}
factoryFunction('Paulo').logou(); */




  /* CONSTRUCTOR FUNCTION: -> UMA FUNÇÃO PARA CONSTRUIR VÁRIOS OBJETOS.
function Pessoa(name, idade){
  this.nome = name;
  this.idade = idade
}
-> A PALAVRA 'NEW' SERVE PARA CRIARMOS UM NOVO OBJETO APARTIR DA NOSSA FUNÇÃO CONSTRUTORA.
const pessoa1 = new Pessoa('Breno', 26);
const pessoa2 = new Pessoa('Arlete', 27);
const pessoa3 = new Pessoa('Beatriz', 1); */




  /* PROTOTYPES:
function Game(){
  this.pulou = () => alert('O personagem pulou!');
  this.deitou = () => alert('O personagem deitou!');
}

Game.prototype.correu = () => alert('O personagem correu!');

const novoJogo = new Game();

console.log(novoJogo) */




/* CLASSES: (CLASS)
class Mamifero {
  constructor(patas){
    this.especie = 'Mamiferos'
  }

  dormir(){
    alert('Esse mamifero dormiu')
  }
}

class Pessoa extends Mamifero {  // EXTENDS -> usado p/ extender (ter acesso) métodos e propriedades da classe mãe.
  constructor(name, idade){      // MÉTODO + PARAMETROS.
    super(patas);                // TODA VEZ QUE UMA CLASSE FOR EXTENDIDA, PRECISAMOS CHAMAR O SUPER DETRO DO CONSTRUTOR, PARA TER ACESSO AOS PARAMETROS DA CLASSE MÃE.
    this.name = name
    this.idade = idade           // PROPRIEDADES (this* posso ter acesso a esses valores em toda a classe).
    this.cidade = 'Belém'
  }

  dormir(){
    super.dormir();      // SUPER -> ultilizado quando temos dois métodos com nomes iguais e queremos falar apenas com o método da classe de origem.
  }

  static andou(){
    alert(`${this.name} andou`)   // NOVO MÉTODO DENTRO DO CLASS (STATIC impossibilita que objetos criados apartir do constructor, tenham acesso a esse método).
  }
}

const pessoa1 = new Pessoa('Breno', 26);    // CRIAÇÃO DE UM NOVO OBJETO APARTI DA CLASS Pessoa. */




/* DESESTRUTURAÇÃO: OBJETOS & ARRAY.
const pessoa = {
  nome: 'Breno',
  idade: 26,
  endereco: {             // DESESTRUTURANDO UM OBJ DENTRO DE OUTRO OBJ.
      cidade: 'Belem',
      estado: 'PA'
  }
}

const {cidade, estado} = pessoa.endereco;    // BASTA INFORMAR A PROPRIEDADE OU MÉTODO, QUE PRETENDEMOS ACESSAR, DENTRO DAS CHAVES DA VARIÁVEL.

console.log(estado)

// DESESTRUTURAÇÃO ARRAY:
const carros = ['HB20', 'Hilux', 'Cerato'];

console.log(carros[0]) */




/* REST: -> JUNTA TODOS OS ARGUMENTOS DE UMA FUNÇÃO EM UM ÚNICO ARRAY.
function estados (...estados){
  console.log(estados)
}
estados('PA', 'RJ', 'SP', 'SC', 'CE');


// SPREAD ARRAY: -> DISTRIBUI ITENS DE UM ARRAY OU OBJETO EM OUTRO.
const carrosAltos = ['Hilux', 'S10', 'Pajero', 'Ranger']
const carrosBaixos = ['HB20', 'Gol', 'Celta', 'Corsa']

const carros = [...carrosAltos, ...carrosBaixos];

console.log(carros)


// SPREAD OBJETO:
const pessoa = {
  nome: 'Breno',
  idade: 26,
  profissao: 'Programador'
}

const endereco = {
  cidade: 'Belem',
  estado: 'PA'
}

const dados = {
  ...pessoa,          // SPREAD EM OBJETOS (...), JUNTA AS PROPRIEDADES DOS DOIS OBJETOS.
  ...endereco
}
*/




 /* ARRAY/OBJETOS E ITERADORES:
const estoque = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata', '']   //ARRAY
const precos = [3.50, 5, 3.50, 2, 2.50, 0]
const pessoas = [{nome:'Breno', idade: 26}, {nome:'Arlete', idade: 27}]   //OBJETO
const endereco = [{cidade:'Belém', estado:'PA', pais:'Brasil'}, {cidade:'Macapá', estado:'AP', pais:'Brasil'}]

endereco.forEach((valor, index, array) => {     //ITERADOR forEach
  console.log(valor, index, array)
})

const retornoMap = estoque.map((valor, index, array) => {      //ITERADOR Map
  return `${valor} ${index}`   //Template String, concatenando valor mais index no novo array.
})

const total = precos.reduce((acc, valor, index, array) => {      //ITERADOR reduce
  return acc + valor     // acc -> acumulador, resultado da iteração anterior.
}, 0)    // 0 -> valor default para a primeira iteração tbm ter um acumulador.

const resultado = estoque.find((valor, index, array) => {      //ITERADOR find
  return valor;
})

const resultado = estoque.findIndex((valor, index, array) => {      //ITERADOR findIndex
  return valor;
})

const resultado = estoque.some ((valor, index, array) => valor );     //ITERADOR some

const resultado = estoque.every ((valor, index, array) => valor );      //ITERADOR every 

const resultado = estoque.filter ((valor, index, array) => valor === 'arroz' );      //ITERADOR filter */




/* MÉTODOS E PROPRIEDADES DAS FUNÇÕES:
function retornaNome (name, age) {
  console.log(name, this.profissao, this.cidade)
}

// PROPRIEDADES: -> LENGHT
retornaNome.length; // 2
retornaNome.name;  //retornaNome

// PRINCIPAIS MÉTODOS:
retornaNome.call({profissao:'Programador', cidade:'Belém'}, 'Breno', 26)
retornaNome.apply({profissao:'Programador', cidade:'Belém'}, ['Breno', 26])  //mesma coisa do CALL, porém, os valores dos argumen. são passados em um array.
const novaFuncao = retornaNome.bind({profissao:'Programador', cidade:'Belém'}, 'Breno', 26)   //Não executa a função, apenas retorna e armazena em uma const.

novaFuncao () */




/* MÉTODOS E PROPRIEDADES DE OBJETOS:
const dados = {
  name: 'Breno',
  idade: 26
  
}

const endereco = {
  cidade: 'Belém',
  estado: 'PA'
}

Object.assign(dados, endereco)  //O primeiro parametro é o que vai receber os métodos e propriedades do segundo parametro, ou seja, dados vai receber de endereco.
console.log(dados)

console.log(Object.keys(dados))
console.log(Object.values(dados)) */




/* MÉTODOS E PROPRIEDADES DO NUMBER, MATH E DATE:
const numero = 10
const string1 = '20'
const string2 = '20.9'
const numeroQuebrado = 10.8

Number.parseFloat(string1)  // 20
Number.parseInt(string2, 10)  // 20
numeroQuebrado.toFixed()  // 11
numero.toString()  // '10'

Math.abs(-5)  // 5
Math.ceil(4.3)  // 5
Math.floor(4.9)  // 4
Math.round(4.7)  // 5
console.log((Math.random()* 200).toFixed())  // GERA UM NÚMERO ALEÁTORIO DE 0 A 200, PORÉM, SÓ NÚMEROS INTEIROS (toFixed).
Math.max(3,2,7,14)  // 14
Math.min(3,2,7,14)  // 2

const hoje = new Date();

hoje.getDate()  // 09
hoje.getMonth()  // 11
hoje.getFullYear()  // 2023
hoje.getHours() // 10
hoje.getMinutes()  // 30
hoje.getDay()  // 4

console.log(hoje.getDate())  */




/* PROMISES: -> SINCRONO E ASSINCRONO.
const minhaPromisse = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao){
    resolve('Resolvido')
  } else {
    reject(Error('Um erro aconteceu na promisse'))
  }
})

// THEN e CATCH:
minhaPromisse.then((resultado) => {
  console.log(resultado)
}).catch((error) => {
  console.log(error)
}) */










