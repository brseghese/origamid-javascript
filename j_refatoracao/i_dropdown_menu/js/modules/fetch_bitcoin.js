export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = `R$ ${bitcoin.BRL.sell
        .toString()
        .replace(".", ",")}`;
    })
    .catch((error) => {
      console.log(error);
    });
}
