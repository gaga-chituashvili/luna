import type {
  ContactHeroData,
  ContactInfoItem,
  SocialLink,
  ContactLocationData,
} from "../api/type/Contact.types";

export const contactHeroData: ContactHeroData = {
  title: "Get in Touch with",
  highlight: "Luna.",
  description:
    "We’re here to help. Whether you have questions about our coffee blends, orders, or partnerships, reach out and we’ll respond quickly.",
};

export const contactInfoData: ContactInfoItem[] = [
  {
    icon: "mail",
    value: "hello@luna.coffee",
  },
  {
    icon: "phone",
    value: "+995 555 123 456",
  },
  {
    icon: "location",
    value: "Tbilisi, Georgia",
  },
];

export const socialLinks: SocialLink[] = [
  { icon: "youtube", link: "#" },
  { icon: "instagram", link: "#" },
  { icon: "facebook", link: "#" },
  { icon: "linkedin", link: "#" },
];

export const contactLocationData: ContactLocationData = {
  title: "Luna",
  city: "Tbilisi, Georgia",
  address: "Tbilisi, Georgia",
  workingHours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 3:00 PM",
  },
  mapUrl:
    "https://maps.google.com/maps?q=Tbilisi&t=&z=14&ie=UTF8&iwloc=&output=embed",
};
