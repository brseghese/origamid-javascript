// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  const priceNumber = 9.99;
  console.log(priceNumber);
})();
