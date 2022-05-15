// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método que mostre o seu nome completo

let bruno = {
  nome: "Bruno",
  sobrenome: "Seghese",
  idade: 41,
  superior: true,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};
console.table(bruno);
console.log(bruno.nomeCompleto());

bruno.hoje = function () {
  return new Date().getFullYear();
};
console.log(bruno.hoje());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
// console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(ser) {
    if (ser === "homem") {
      return `Au Au !`;
    } else {
      return "...";
    }
  },
};
console.table(cachorro);
console.log(cachorro.latir("homem"));
