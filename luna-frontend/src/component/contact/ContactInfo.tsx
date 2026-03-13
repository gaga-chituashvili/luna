import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

import { contactInfoData, socialLinks } from "@/../src/constants/contactData";

const iconMap = {
  mail: Mail,
  phone: Phone,
  location: MapPin,
};

const socialIconMap = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};

export function ContactInfo() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#e9e5e3] rounded-[28px] md:rounded-[32px] border border-[#a16a54] p-6 md:p-8 text-[#6f4a3a] space-y-5 md:space-y-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Reach Us Directly
      </h2>

      <div className="space-y-3 text-base md:text-2xl">
        {contactInfoData.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <p key={i} className="flex items-center gap-3">
              <Icon size={18} />
              {item.value}
            </p>
          );
        })}
      </div>

      <div className="flex gap-3 md:gap-4 pt-2">
        {socialLinks.map((item, i) => {
          const Icon = socialIconMap[item.icon];
          return (
            <a
              key={i}
              href={item.link}
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#7a4e3a] text-white transition hover:scale-110 hover:bg-[#5d3828]"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
