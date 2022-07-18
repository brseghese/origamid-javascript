// Rest
function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  argArray.forEach((arg) => console.log(arg));
  console.log(argArray);
  return lado * totalLados;
}
console.log(perimetroForma(10, 5));
console.log(perimetroForma(10));

function perimetroForma2(lado, totalLados, ...listaArgumentos) {
  console.log(arguments);
  console.log(listaArgumentos);
  listaArgumentos.forEach((item) => console.log(item));
  return lado * totalLados;
}
console.log(perimetroForma2(10, 20, 30, "string", true));

// Spread
const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];
const comidas = [...frutas, "Arroz", ...legumes];
console.log(comidas);

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(`${ganhador} ganhou um ${premio}`);
  });
}
const ganhadores = ["Bruno", "Liane", "Eduardo", "Valentina"];
anunciarGanhadores("Carro", ganhadores);
anunciarGanhadores("Carro", ...ganhadores);

const numeros = [3, 4, 5, 12, 3, 24];
const numeroMaximo = Math.max(...numeros);
console.log(numeroMaximo);

const btns = document.querySelectorAll("button");
const btnsArray = [...btns];
console.log(btnsArray);
