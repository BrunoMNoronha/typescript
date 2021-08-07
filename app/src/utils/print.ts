import { Negociacao } from "../models/negociacao";
import { Printable } from "./printable";

export function print(...objetos: Array<Printable>): void {
  for (let objeto of objetos) {
    console.log(objeto.toString());
  }
}
