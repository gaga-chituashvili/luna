import shopheader from "../../assets/shopheader.png";

export const Header = () => {
  return (
    <section className="relative w-full h-[18.75rem] md:h-[25rem] lg:h-[31.25rem] overflow-hidden">
      <img
        src={shopheader}
        alt="shop header"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover <span className="text-orange-400">Your</span> Perfect Blend
        </h1>
        <p className="text-sm md:text-lg lg:text-xl max-w-2xl text-gray-200">
          Carefully selected blends, chosen by our customers for everyday
          moments of calm.
        </p>
      </div>
    </section>
  );
};
