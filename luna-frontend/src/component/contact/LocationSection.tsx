import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4">
      <div className="max-w-6xl w-full bg-[#e6e1df] rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-2/3 h-[280px] md:h-auto">
          <iframe
            title="map"
            className="w-full h-full grayscale-[20%]"
            src="https://maps.google.com/maps?q=Tbilisi&t=&z=14&ie=UTF8&iwloc=&output=embed"
          />
        </div>

        <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col justify-between md:border-l border-[#c9bdb6]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7b4a36] mb-6 md:mb-8">
              Luna
            </h2>

            <div className="mb-6 md:mb-8">
              <p className="text-xs md:text-sm text-[#9c7a6b] uppercase tracking-wider mb-3">
                Address:
              </p>

              <div className="flex items-center gap-2 text-[#7b4a36] mb-2">
                <ArrowUpRight size={18} />
                <span>Tbilisi, Georgia</span>
              </div>

              <div className="flex items-center gap-2 text-[#7b4a36]">
                <ArrowUpRight size={18} />
                <span>Address: Tbilisi, Georgia</span>
              </div>
            </div>

            <div>
              <p className="text-xs md:text-sm text-[#9c7a6b] uppercase tracking-wider mb-3">
                Working hours:
              </p>

              <div className="flex items-center gap-2 text-[#7b4a36] mb-2">
                <Clock size={18} />
                <span>Monday – Friday: 8:00 AM – 6:00 PM</span>
              </div>

              <div className="flex items-center gap-2 text-[#7b4a36]">
                <Clock size={18} />
                <span>Saturday: 9:00 AM – 3:00 PM</span>
              </div>
            </div>
          </div>

          <button className="mt-8 md:mt-10 bg-[#7b4a36] text-white py-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#6a3f2f] transition">
            <MapPin size={18} />
            Direction
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
