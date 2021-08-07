export abstract class View<T> {
  protected _element: HTMLElement;
  private scape = false;
  constructor(selector: string, scape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this._element = element as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM`);
    }
    scape ? scape : false;
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
