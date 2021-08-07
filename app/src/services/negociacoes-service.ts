import { ImportNegociacoes } from "../interfaces/import-negociacoes.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((dados: ImportNegociacoes[]) => {
        return dados.map((dado) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}
