export abstract class View<T> {
  protected _element: HTMLLIElement;
  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this._element.innerHTML = template;
  }
}
