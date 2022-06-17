// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => item.classList.add("ativo"));
console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if (index > 0) item.classList.remove("ativo");
});
console.log(menu);

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");
console.log(imagens);

imagens.forEach((item) => {
  if (item.hasAttribute("alt")) {
    console.log("possui atributo alt", item);
  } else {
    console.log("não possui atributo alt", item);
  }
});

// Modifique o href do link externo no menu
const linkDev = document.querySelector("a[href^='http']");
console.log(linkDev);
linkDev.setAttribute("href", "https://google.com");
