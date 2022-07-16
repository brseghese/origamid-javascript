class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
}
const blueButton = new Button("Comprar", "green", "white");
blueButton.appendTo("body");

// ----------

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }
// const blueButton = new Button({
//   text: "Clique",
//   background: "blue",
//   color: "white",
// });
// console.log(blueButton);

// ----------

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static createButton(text, background) {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }
// const blueOptions = {
//   text: "Clique",
//   background: "blue",
//   color: "white",
// };
// const blueButton = new Button(blueOptions);
// const blueButtonStatic = Button.createButton("Clique", "red");
// console.log(blueButton);
// console.log(blueButtonStatic);

// ----------

// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }
// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };
