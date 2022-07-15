fetch("./dados.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((materia) => {
      console.log(materia.aula);
    });
  });

fetch("./dados.json")
  .then((response) => response.text())
  .then((jsonText) => {
    const jsonObjeto = JSON.parse(jsonText);
    console.log(jsonText);
    console.log(jsonObjeto);
  });

fetch("./dados.json")
  .then((response) => response.json())
  .then((jsonObjeto) => {
    const jsonText = JSON.stringify(jsonObjeto);
    console.log(jsonObjeto);
    console.log(jsonText);
  });

const config = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};
const stringConfig = JSON.stringify(config);
console.log(stringConfig);

localStorage.config = JSON.stringify(config);
console.log(localStorage.config);
