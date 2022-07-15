fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((pokemon) => console.log(pokemon));

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: '{"title": "JavaScript", "time": "25"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch(url, options).then((response) => {
  response.headers.forEach(console.log);
});
