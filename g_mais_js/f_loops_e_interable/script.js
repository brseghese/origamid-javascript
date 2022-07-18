// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const body = document.querySelector("body");
for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");
  li.innerText = `Item ${i + 1}`;
  li.style.listStyle = "none";
  body.appendChild(li);
}
const lis = document.querySelectorAll("li");
for (const li of lis) li.classList.add("ativo");

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const windowKey in window)
  console.log(`${windowKey}: ${window[windowKey]}`);
