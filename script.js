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


// SPREAD: -> DISTRIBUI ITENS DE UM ARRAY OU OBJETO EM OUTRO.
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


