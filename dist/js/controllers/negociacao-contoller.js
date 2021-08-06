import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Negociacao } from "./../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = this._criaNegociação();
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._limparFormulario();
        this._inputData.focus();
    }
    _criaNegociação() {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ","));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseInt(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
    }
}
