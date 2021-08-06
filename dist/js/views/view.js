export class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    template(model) {
        throw Error("Classe filha precisa implementar o método template");
    }
    update(model) {
        const template = this.template(model);
        this._element.innerHTML = template;
    }
}
