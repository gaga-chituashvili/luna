import { TIMELINE } from "../../constants/ourStoryData";

export const Timeline = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1410]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d4af37]">
          Our Journey
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#d4af37] to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {TIMELINE.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#8b6947] border-4 border-[#1a1410] z-10">
                  <span className="text-white font-bold text-sm">
                    {event.year}
                  </span>
                </div>

                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="bg-[#2d1f1a] rounded-2xl p-8 border border-[#8b6947]/20 hover:border-[#8b6947]/40 transition-all hover:scale-105 duration-300">
                    <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-[#d4af37]/20 text-[#d4af37] rounded-full md:hidden">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-[#f4d03f]">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
