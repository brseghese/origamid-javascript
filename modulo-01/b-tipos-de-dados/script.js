// Declare uma variável contendo uma string
var nome = "Bruno";
console.log(nome);

// Declare uma variável contendo um número dentro de uma string
var ano = "2022";
console.log(typeof ano, ano);

// Declare uma variável com a sua idade
var idade = 40;
console.log(typeof idade, idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var sobrenome = "Seghese";
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time"; // 'It\'s time' // `It's time`
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome;
console.log(`Variável nome é do tipo = ${typeof verificarTipoNome}`);
