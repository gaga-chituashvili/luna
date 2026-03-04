import type { Coffee } from "../api/type/coffees";

export type State = {
  cart: Coffee[];
};

export type Action =
  | { type: "ADD_TO_CART"; payload: Coffee }
  | { type: "REMOVE_FROM_CART"; payload: number };