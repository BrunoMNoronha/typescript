export class View {
    constructor(selector, scape) {
        this.scape = false;
        this._element = document.querySelector(selector);
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
