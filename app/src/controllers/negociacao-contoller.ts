import { DiasDaSemana } from "../enumerations/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Negociacao } from "./../models/negociacao.js";

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView", true);
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this._inputData = document.querySelector("#data") as HTMLInputElement;
    this._inputQuantidade = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._inputValor = document.querySelector("#valor") as HTMLInputElement;
    this._negociacoesView.update(this._negociacoes);
  }

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
