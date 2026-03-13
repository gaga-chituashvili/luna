import { VALUES } from "../../constants/ourStoryData";

export const Values = () => {
  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d4af37]">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#2d1f1a] to-[#1a1410] rounded-2xl p-8 border border-[#8b6947]/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#f4d03f]">
                {value.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/5 group-hover:to-[#d4af37]/10 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
