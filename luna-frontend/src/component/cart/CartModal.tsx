import { useCartStore } from "../../store/cartStore";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import axios from "axios";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CartModal = ({ open, onClose }: Props) => {
  const cart = useCartStore((state) => state.cart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!open) return null;

  const checkout = async () => {
    const items = cart.map(({ id, quantity }) => ({
      productId: id,
      quantity,
    }));

    try {
      await axios.post("/v1/orders", { items });

      clearCart();
      onClose();
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };
  return (
    <section className="fixed inset-0 z-50">
      <div className="absolute right-6 top-20 w-[380px] bg-[#F5F2F0] rounded-3xl p-6 text-[#825444] shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 border border-[#825444] rounded-full p-2"
        >
          <X size={16} />
        </button>

        <h2 className="text-xl font-semibold mb-6">
          Cart <sup>{cart.length}</sup>
        </h2>

        <article className="space-y-5 max-h-[300px] overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  className="w-12 h-12 rounded-lg object-cover"
                />

                <div>
                  <p className="text-sm">{item.name}</p>

                  <span className="text-sm font-medium">
                    GEL {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border border-[#825444] rounded-xl px-2 py-1 flex flex-col items-center">
                <ChevronUp
                  className="cursor-pointer"
                  onClick={() => increase(item.id)}
                />

                <span>{item.quantity}</span>

                <ChevronDown
                  className="cursor-pointer"
                  onClick={() => decrease(item.id)}
                />
              </div>
            </div>
          ))}
        </article>

        <div className="mt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>GEL {total.toFixed(2)}</span>
        </div>
        <button
          onClick={checkout}
          className="mt-4 w-full bg-[#825444] text-white py-3 rounded-full text-sm"
        >
          Check out
        </button>
        <button
          className="mt-4 w-full bg-[#825444] text-white py-3 rounded-full text-sm"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
};
