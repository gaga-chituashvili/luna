import { create } from "zustand";
import { persist } from "zustand/middleware";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export type AuthUser = {
  id: number;
  email: string;
  fullName: string;
  username: string;
  birthDate: string | null;
};

type AuthStore = {
  user: AuthUser | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      loading: false,

      fetchUser: async () => {
        const token = localStorage.getItem("token");

        if (!token) {
          set({ user: null, loading: false });
          return;
        }

        set({ loading: true });

        try {
          const res = await fetch(`${API_URL}/auth/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!res.ok) throw new Error("Unauthorized");

          const data = await res.json();
          set({ user: data.data });
        } catch {
          localStorage.removeItem("token");
          set({ user: null });
        } finally {
          set({ loading: false });
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
        window.location.href = "/";
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }), // loading არ შევინახოთ
    },
  ),
);
