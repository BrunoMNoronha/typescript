import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private _elemento: HTMLLIElement;
  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .lista()
            .map((negociacao) => {
              return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    `;
  }

  update(model: Negociacoes): void {
    this._elemento.innerHTML = this.template(model);
  }
}
