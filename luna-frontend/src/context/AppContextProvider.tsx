import { useReducer, useEffect } from "react";
import { AppContext } from "./context";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? { cart: JSON.parse(storedCart) } : initial;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
