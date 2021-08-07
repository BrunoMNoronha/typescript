export abstract class View<T> {
  protected _element: HTMLLIElement;
  private scape = false;
  constructor(selector: string, scape?: boolean) {
    this._element = document.querySelector(selector);
    scape ? scape : false;
    console.log(scape);
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this._element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
