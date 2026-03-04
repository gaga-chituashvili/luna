export type State = {
  cart: any[];
};

export type Action =
  | { type: "ADD_TO_CART"; payload: any }
  | { type: "REMOVE_FROM_CART"; payload: number };