import { HERO_DATA } from "../../constants/ourStoryData";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1a1410] via-[#2d1f1a] to-[#1a1410] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/coffee-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-[#8b6947]/20 text-[#d4af37] rounded-full border border-[#8b6947]/30">
          {HERO_DATA.subtitle}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
          {HERO_DATA.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {HERO_DATA.description}
        </p>

        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-[#d4af37]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};
