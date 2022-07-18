function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text,
    element,
  };
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

console.log(btnComprar);
console.log(btnVender.element());
