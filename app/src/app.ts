import { NegociacaoController } from "./controllers/negociacao-contoller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form") as HTMLElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});

const botaoImporta = document.querySelector("#botao-importar");
botaoImporta?.addEventListener("click", () => {
  controller.importarDados();
});
