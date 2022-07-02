// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

function somarValor(array) {
  let totalTaxas = 0;
  let totalRecebimentos = 0;
  array.forEach((item) => {
    const valores = +item.valor.replace("R$ ", "");
    if (item.descricao.slice(0, 4) === "Taxa") totalTaxas += valores;
    else totalRecebimentos += valores;
  });
  console.log(totalTaxas, totalRecebimentos);
}
somarValor(transacoes1);

// Retorne uma array com a lista abaixo

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's

const html = `<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
  </ul>`;

// console.log(html);

const novoHtml2 = html.split("span").join("a");
console.log(novoHtml2);

// const novoHtml = html.replace(/[span]+/g, "a");
// console.log(novoHtml);

// Retorne o último caracter da frase

const frase = "Melhor do ano!";

console.log(frase[frase.length - 1]);
console.log(frase.slice(-1));
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas

const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

// let novaTrans = [];
// transacoes2.forEach((item) => {
//   novaTrans.push(item.trim().toLowerCase().split(",").join(""));
// });
// console.log(novaTrans);

let total = 0;
transacoes2.forEach((item) => {
  if (item.trim().toLowerCase().includes("taxa")) total++;
});
console.log(total);
