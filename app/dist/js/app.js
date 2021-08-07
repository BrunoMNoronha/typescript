import { NegociacaoController } from "./controllers/negociacao-contoller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
const botaoImporta = document.querySelector("#botao-importar");
botaoImporta === null || botaoImporta === void 0 ? void 0 : botaoImporta.addEventListener("click", () => {
    controller.importarDados();
});
