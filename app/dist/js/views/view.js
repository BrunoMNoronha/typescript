export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this._element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
    }
    update(model) {
        let template = this.template(model);
        this._element.innerHTML = template;
    }
}
