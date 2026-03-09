import type { Coffee } from "../api/type/coffees";

export type CartItem = Coffee & {
  quantity: number;
};

export type State = {
  cart: CartItem[];
};

export type Action =
  | { type: "ADD_TO_CART"; payload: Coffee }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number };