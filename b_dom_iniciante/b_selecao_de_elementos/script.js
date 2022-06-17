// Retorne no console todas as imagens do site
const imgHtmlCollection = document.getElementsByTagName("img");
console.log(imgHtmlCollection); // ao vivo

const imgNodeList = document.querySelectorAll("img");
console.log(imgNodeList); // statico

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.getElementsByClassName("animais-descricao");
console.log(primeiroH2[0].children[0].children[0]); // eu

const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

const animais = document.querySelector(".animais-descricao");
const animaisH2 = animais.querySelector("h2");
console.log(animaisH2);

// Selecione o último p do site
const ultimoP = document.getElementsByClassName("copy");
console.log(ultimoP[0].children[0]);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
console.log(paragrafos[--paragrafos.length]);
