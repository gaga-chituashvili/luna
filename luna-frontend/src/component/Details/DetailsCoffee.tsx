import { useParams, Link } from "@tanstack/react-router";
import { useCoffees } from "@/api/api /hooks/useData";
import { useCartStore } from "@/store/cartStore";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { ROUTES } from "@/routes/paths";
import { coffeeDetailsData } from "@/constants/coffeeDetails.data";

export const DetailsCoffee = () => {
  const { coffeeId } = useParams({ from: "/shop/$coffeeId" });
  const { data: coffees, isLoading } = useCoffees();

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);

  const coffee = coffees?.find((c) => c.id.toString() === coffeeId);

  const cartItem = cart.find((item) => item.id === coffee?.id);
  const quantity = cartItem?.quantity || 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center text-white">
        <ClimbingBoxLoader color="#a67c52" />
      </div>
    );
  }

  if (!coffee) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coffee Not Found</h1>
          <Link
            to={ROUTES.shop}
            className="px-6 py-3 bg-[#a67c52] text-white rounded-lg hover:bg-[#8b6540] transition inline-block"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = (coffee.price * Math.max(quantity, 1)).toFixed(2);

  return (
    <section className="min-h-screen  bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]  flex items-center justify-center p-4 md:p-8 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-br  rounded-[2.5rem]  w-full max-w-[37.5rem] aspect-square flex items-center justify-center shadow-2xl">
            <img
              src={coffee.img}
              alt={coffee.name}
              className="w-full h-full object-cover drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#a67c52]">
            {coffee.name}
          </h1>

          <div className="flex items-center gap-2">
            {[...Array(coffeeDetailsData.stars)].map((_, i) => (
              <svg
                key={i}
                className="w-7 h-7 fill-[#d4af37]"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="text-gray-400 ml-2 text-lg">
              {coffeeDetailsData.reviews} review
            </span>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {coffeeDetailsData.description}
          </p>

          <div className="text-2xl">
            <span className="text-gray-400">Price: </span>
            <span className="font-bold text-white">
              GEL {coffee.price.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {coffeeDetailsData.tags.map((tag) => (
              <span
                key={tag}
                className="px-6 py-2.5 border-2 border-[#6b4423] rounded-full text-base text-gray-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <span className="px-7 py-2.5 border-2 border-[#6b4423] rounded-full text-base text-gray-300 font-medium inline-block">
              {coffeeDetailsData.weight}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center gap-6 border-2 border-[#4a3022] rounded-full px-8 py-3 bg-[#0f0f0f] w-full sm:w-auto justify-center">
              <button
                onClick={() => quantity > 0 && decrease(coffee.id)}
                disabled={quantity === 0}
                className="text-[#a67c52] text-3xl hover:text-[#c58b5e] transition font-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                −
              </button>
              <span className="text-2xl font-medium min-w-[3rem] text-center text-[#a67c52]">
                {quantity}
              </span>
              <button
                onClick={() => {
                  if (quantity === 0) {
                    addToCart(coffee);
                  } else {
                    increase(coffee.id);
                  }
                }}
                className="text-[#a67c52] text-3xl hover:text-[#c58b5e] transition font-light"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                if (quantity === 0) {
                  addToCart(coffee);
                }
              }}
              disabled={quantity > 0}
              className="bg-[#8b6947] hover:bg-[#a67c52] text-white px-10 py-4 rounded-full text-lg font-medium transition flex-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {quantity > 0
                ? `In Cart - GEL ${totalPrice}`
                : `Add to cart - GEL ${coffee.price.toFixed(2)}`}
            </button>
          </div>

          <button className="border-2 border-[#6b4423] hover:border-[#8b6947] hover:bg-[#8b6947]/10 text-[#a67c52] hover:text-[#c58b5e] px-10 py-4 rounded-full text-lg font-medium transition shadow-lg">
            Buy it now
          </button>
        </div>
      </div>
    </section>
  );
};
