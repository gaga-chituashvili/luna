import { createContext } from "react";
import type { State, Action } from "./types";

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: {} as State,
  dispatch: () => null,
});
