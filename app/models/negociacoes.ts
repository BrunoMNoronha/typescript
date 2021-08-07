import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}
