// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

function handleLink(event) {
  event.preventDefault();

  links.forEach((item) => {
    item.classList.remove("ativo");
  });

  // this.classList.toggle("ativo");
  event.currentTarget.classList.add("ativo");
}

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function handleElement(event) {
  console.log(event.currentTarget);
  // event.currentTarget.remove();
}

const todosElementos = document.querySelectorAll("body *");
todosElementos.forEach((element) => {
  element.addEventListener("click", handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}

window.addEventListener("keydown", handleClickT);
