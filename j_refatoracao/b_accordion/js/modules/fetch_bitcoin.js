export default function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = `R$ ${bitcoin.BRL.sell.toString().replace(".", ",")}`;
  })
  .catch((error) => {
    console.log(error);
  });
