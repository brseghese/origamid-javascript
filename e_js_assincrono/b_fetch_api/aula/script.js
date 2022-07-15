const doc = fetch("./doc.txt");
doc
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
    const h1 = document.querySelector("h1");
    h1.innerText = body;
  });

const cep = fetch("https://viacep.com.br/ws/01001000/json/");
cep
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body.logradouro;
  });

const style = fetch("./style.css");
style
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
    const corpo = document.querySelector("body");
    const style = document.createElement("style");
    style.innerHTML = body;
    corpo.appendChild(style);
  });

const sobre = fetch("./sobre.html");
const div = document.createElement("div");
sobre
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
    div.innerHTML = body;
    const corpo = document.querySelector("body");
    corpo.appendChild(div);
  });

const imagem = fetch("./imagem.png");
imagem
  .then((resolve) => resolve.blob())
  .then((body) => {
    console.log(body);
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });

const cepHouse = fetch("https://viacep.com.br/ws/15060080/json/");
cepHouse.then((response) => {
  const response2 = response.clone();
  response.text().then((text) => console.log(text));
  response2.json().then((json) => console.log(json));
});

const headers = fetch("https://viacep.com.br/ws/15060080/json/");
headers.then((response) => {
  console.log(response);
  response.headers.forEach(console.log);
  console.log(response.status);
  if (response.status === 200) console.log("Tudo OK!!!");
  console.log(response.url);
  console.log(response.type);
});
