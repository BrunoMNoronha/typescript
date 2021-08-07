import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { DiasDaSemana } from "../enumerations/dias-da-semana.js";
import { ImportNegociacoes } from "../interfaces/import-negociacoes.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Negociacao } from "./../models/negociacao.js";

export class NegociacaoController {
  @domInjector("#data")
  private _inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private _inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @tempoDeExecucao()
  @inspect
  public adiciona(): void {
    const negociacao = Negociacao.create(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );
    if (this._isDiaUtil(negociacao.data)) {
      this._negociacoes.adiciona(negociacao);
      this._atualizaView();
      this._limparFormulario();
    } else {
      this._mensagemView.update(
        "Apenas negociaçõle sem dias úteis são aceitas"
      );
    }
  }

  public importarDados(): void {
    fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((dados: ImportNegociacoes[]) => {
        return dados.map((dado) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      })
      .then((negociacoesDados) => {
        for (let negociacao of negociacoesDados) {
          this._negociacoes.adiciona(negociacao);
        }
        this._negociacoesView.update(this._negociacoes);
      });
  }

  private _isDiaUtil(date: Date): boolean {
    return (
      date.getDay() > DiasDaSemana.DOMINGO &&
      date.getDay() < DiasDaSemana.SABADO
    );
  }

  private _limparFormulario(): void {
    this._inputData.value = "";
    this._inputQuantidade.value = "";
    this._inputValor.value = "";
    this._inputData.focus();
  }

  private _atualizaView(): void {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso");
  }
}
