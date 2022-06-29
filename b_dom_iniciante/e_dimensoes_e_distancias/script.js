// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens

function somaLarguraImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaLarguraImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkHeight >= 47 && linkWidth >= 47) {
    console.log(link, " Possui acessibilidade.");
  } else {
    console.log(link, " Não possui acessibilidade.");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia("(max-width: 720px)").matches;
console.log(browser);

if (browser) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
