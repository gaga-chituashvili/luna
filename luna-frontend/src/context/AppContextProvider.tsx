import { useReducer } from "react";
import { AppContext } from "./context";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
