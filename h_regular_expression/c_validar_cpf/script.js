import ValidarCpf from "./validarCpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();
