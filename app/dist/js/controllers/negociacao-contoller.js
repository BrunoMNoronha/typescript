var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NegociacoesService } from "./../services/negociacoes-service.js";
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
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
        this._negociacaoService = new NegociacoesService();
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
    importarDados() {
        this._negociacaoService.obterNegociacoes().then((negociacoesDados) => {
            for (let negociacao of negociacoesDados) {
                this._negociacoes.adiciona(negociacao);
            }
            this._negociacoesView.update(this._negociacoes);
        });
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
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    tempoDeExecucao(),
    inspect
], NegociacaoController.prototype, "adiciona", null);
