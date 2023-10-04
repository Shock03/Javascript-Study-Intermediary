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


























