import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Coffee } from "../api/type/coffees";

type CartItem = Coffee & {
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (coffee: Coffee) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (coffee) =>
        set((state) => {
          const item = state.cart.find((c) => c.id === coffee.id);

          if (item) {
            return {
              cart: state.cart.map((c) =>
                c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...coffee, quantity: 1 }],
          };
        }),

      increase: (id) =>
        set((state) => ({
          cart: state.cart.map((c) =>
            c.id === id ? { ...c, quantity: c.quantity + 1 } : c,
          ),
        })),

      decrease: (id) =>
        set((state) => ({
          cart: state.cart
            .map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c))
            .filter((c) => c.quantity > 0),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
