import { ObjectModel } from "../interfaces/object-model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements ObjectModel<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this._negociacoes;
  }

  public toString(): string {
    return JSON.stringify(this._negociacoes, null, 2);
  }

  public equals(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}
