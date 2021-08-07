import { inspect } from "../decorators/inspect.js";

export abstract class View<T> {
  protected _element: HTMLElement;
  constructor(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      this._element = element as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM`);
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    this._element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
