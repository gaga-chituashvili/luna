import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/router";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

const App = () => {
  useEffect(() => {
    useAuthStore.getState().fetchUser();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
