import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export type AuthUser = {
  id: number;
  email: string;
  fullName: string;
  username: string;
  birthDate: string | null;
};

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(!!token);

  useEffect(() => {
    if (!token) return;

    fetch(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  return { user, loading, logout };
}
