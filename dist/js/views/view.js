export class View {
    constructor(selector, scape) {
        this.scape = false;
        const element = document.querySelector(selector);
        if (element) {
            this._element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
        scape ? scape : false;
        console.log(scape);
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this._element.innerHTML = template;
    }
}
