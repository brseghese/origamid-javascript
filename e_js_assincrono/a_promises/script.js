const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Bruno", idade: 41 });
    }, 2000);
  } else reject(Error("Um erro ocorreu"));
});

const retorno = promessa
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = "Desenvolvedor";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log("catch");
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("Terminou");
  });

console.log(retorno);

// ---

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

console.log(carregouTudo);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
