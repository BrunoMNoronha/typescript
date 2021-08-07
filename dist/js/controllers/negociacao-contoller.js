import { DiasDaSemana } from "../enumerations/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Negociacao } from "./../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.create(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (this._isDiaUtil(negociacao.data)) {
            this._negociacoes.adiciona(negociacao);
            this._atualizaView();
            this._limparFormulario();
        }
        else {
            this._mensagemView.update("Apenas negociaçõle sem dias úteis são aceitas");
        }
    }
    _isDiaUtil(date) {
        return (date.getDay() > DiasDaSemana.DOMINGO &&
            date.getDay() < DiasDaSemana.SABADO);
    }
    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
    _atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso");
    }
}
