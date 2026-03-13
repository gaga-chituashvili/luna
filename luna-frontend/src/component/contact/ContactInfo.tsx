import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const Social = [
  { icon: Youtube, link: "#" },
  { icon: Instagram, link: "#" },
  { icon: Facebook, link: "#" },
  { icon: Linkedin, link: "#" },
];

export function ContactInfo() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#e9e5e3] rounded-[28px] md:rounded-[32px] border border-[#a16a54] p-6 md:p-8 text-[#6f4a3a] space-y-5 md:space-y-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Reach Us Directly
      </h2>

      <div className="space-y-3 text-base md:text-2xl">
        <p className="flex items-center gap-3">
          <Mail size={18} />
          hello@luna.coffee
        </p>

        <p className="flex items-center gap-3">
          <Phone size={18} />
          +995 555 123 456
        </p>

        <p className="flex items-center gap-3">
          <MapPin size={18} />
          Tbilisi, Georgia
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 pt-2">
        {Social.map(({ icon: Icon }, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#7a4e3a] text-white cursor-pointer transition hover:scale-110 hover:bg-[#5d3828]"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
