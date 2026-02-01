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
    <section className="flex flex-col justify-center items-center bg-[#e9e5e3] rounded-[32px] border border-[#a16a54] p-8 text-[#6f4a3a] space-y-6">
      <h2 className="text-4xl font-semibold">Reach Us Directly</h2>

      <div className="space-y-3 text-sm">
        <p className="flex items-center gap-3 text-2xl">
          <Mail size={18} /> hello@luna.coffee
        </p>
        <p className="flex items-center gap-3 text-2xl">
          <Phone size={18} /> +995 555 123 456
        </p>
        <p className="flex items-center gap-3 text-2xl">
          <MapPin size={18} /> Tbilisi, Georgia
        </p>
      </div>

      <div>
        <div className="flex gap-4">
          {Social.map(({ icon: Icon }, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7a4e3a] text-white cursor-pointer"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
