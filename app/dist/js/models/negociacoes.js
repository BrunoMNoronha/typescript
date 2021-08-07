export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    lista() {
        return this._negociacoes;
    }
    toString() {
        return JSON.stringify(this._negociacoes, null, 2);
    }
    equals(negociacoes) {
        return (JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.lista()));
    }
}
