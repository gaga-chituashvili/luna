import { useContext } from "react";
import { AppContext } from "../context/context";

export const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl mb-6">კალათა</h2>

      {state.cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-4">
            <img src={item.img} className="w-16 h-16 object-cover" />

            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.price} ₾</p>
            </div>
          </div>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: index,
              })
            }
          >
            🗑
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-xl mt-6">
        ჯამური ფასი: {total} ₾
      </div>
    </div>
  );
};
