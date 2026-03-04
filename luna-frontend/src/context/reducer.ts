import type { State, Action } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};