import { useContext } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { AppContext } from "../../context/context";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CartModal = ({ open, onClose }: Props) => {
  const { state, dispatch } = useContext(AppContext);

  const up = (itemId: number) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: itemId,
    });
  };

  const down = (itemId: number) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: itemId,
    });
  };

  if (!open) return null;

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
          Cart <sup>{state.cart.length}</sup>
        </h2>

        <article className="space-y-5 max-h-[300px] overflow-y-auto">
          {state.cart.map((item) => (
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
                  onClick={() => up(item.id)}
                />

                <span>{item.quantity}</span>

                <ChevronDown
                  className="cursor-pointer"
                  onClick={() => down(item.id)}
                />
              </div>
            </div>
          ))}
        </article>

        <button className="mt-6 w-full bg-[#825444] text-white py-3 rounded-full text-sm">
          Check out
        </button>
      </div>
    </section>
  );
};
