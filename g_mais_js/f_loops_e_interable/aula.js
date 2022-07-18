// for of
const frutas = ["Banana", "Morango", "Uva"];
// const frase = "Isso é JavaScript";
for (const fruta of frutas) console.log(fruta);
// for (const char of frase) console.log(char);

const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.style.color = "blue";
}
console.log(...buttons);

// for in
const carro = {
  marca: "Honda",
  ano: 2018,
};
Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: false,
  },
});
console.log(carro);
for (const chave in carro) console.log(chave);
for (const chave in carro) console.log(carro[chave]);

const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);
// for (const style in btnStyles) console.log(`${style}: ${btnStyles[style]}`);
