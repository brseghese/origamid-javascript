async function puxarDados() {
  try {
    const responseDados = await fetch("./dados.json");
    const jsonDados = await responseDados.json();
    document.body.innerText = jsonDados.aula;
  } catch (error) {
    console.log(error);
  }
}
puxarDados();

async function puxarTodosDados() {
  try {
    const responseDados = fetch("./dados.json");
    const responseClientes = fetch("./clientes.json");

    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();

    console.log(jsonDados);
    console.log(jsonClientes);
  } catch (error) {
    console.log(error);
  }
}
puxarTodosDados();

async function iniciarAsync() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
  console.log("Depois de 1s");
}
iniciarAsync();
