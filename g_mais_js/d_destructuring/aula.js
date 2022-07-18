const carro = {
  marca: "Honda",
  ano: 2008,
};
const { marca, ano: fabricacao, rodas = 4 } = carro;
console.log(marca, fabricacao, rodas);

const frutas = ["Banana", "Uva", "Morango"];
const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}
document.addEventListener("keyup", handleKeyboard);
