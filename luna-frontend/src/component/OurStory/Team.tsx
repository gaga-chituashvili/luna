import { TEAM } from "../../constants/ourStoryData";
import { User } from "lucide-react";

export const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1410] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d4af37]">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="group relative bg-[#2d1f1a] rounded-2xl overflow-hidden border border-[#8b6947]/20 hover:border-[#d4af37]/40 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-[#8b6947] to-[#6b4423] relative overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    <User />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#f4d03f]">
                  {member.name}
                </h3>
                <p className="text-[#d4af37] mb-4 font-medium">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
