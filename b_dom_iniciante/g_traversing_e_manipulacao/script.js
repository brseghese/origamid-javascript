// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

const faqDl = document.querySelector(".faq");
const faqDt = faqDl.querySelector("dt");
console.log(faqDt);

// Selecione o DD referente ao primeiro DT

const faqDd = faqDt.nextElementSibling;
console.log(faqDd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");
const faq = document.querySelector(".faq");

faq.innerHTML = animais.innerHTML;
faq.classList.add("animais");

// const faq = document.querySelector(".faq");
// const father = faq.parentElement;
// console.log(animais);
// console.log(faq);
// console.log(father);
//  father.replaceChild(animais, faq);
