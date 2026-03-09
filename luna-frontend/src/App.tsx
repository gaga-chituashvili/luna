import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { AppContextProvider } from "./context/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;