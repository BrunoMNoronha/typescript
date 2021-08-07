import { Printable } from "../utils/printable.js";
import { Comparable } from "./comparable.js";

export interface ObjectModel<T> extends Printable, Comparable<T> {}
