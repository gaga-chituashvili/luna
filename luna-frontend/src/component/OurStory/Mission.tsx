import { MISSION } from "../../constants/ourStoryData";

export const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b6947]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#8b6947] to-[#6b4423] p-1">
              <div className="w-full h-full rounded-3xl bg-[#2d1f1a] flex items-center justify-center">
                <div className="text-9xl">☕</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#d4af37]">
              {MISSION.title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {MISSION.description}
            </p>

            <ul className="space-y-4">
              {MISSION.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-[#d4af37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
