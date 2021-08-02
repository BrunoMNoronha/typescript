import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();

  constructor() {
    this._inputData = document.querySelector("#data");
    this._inputQuantidade = document.querySelector("#quantidade");
    this._inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this._criaNegociação();
    this._negociacoes.adiciona(negociacao);
    console.log(this._negociacoes.lista());
    this._limparFormulario();
    this._inputData.focus();
  }

  private _criaNegociação(): Negociacao {
    const exp = /-/g;
    const date = new Date(this._inputData.value.replace(exp, ","));
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseInt(this._inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private _limparFormulario(): void {
    this._inputData.value = "";
    this._inputQuantidade.value = "";
    this._inputValor.value = "";
  }
}
