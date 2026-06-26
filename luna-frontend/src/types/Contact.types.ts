export interface ContactHeroData {
  title: string;
  highlight: string;
  description: string;
}

export type ContactIcon = "mail" | "phone" | "location";

export interface ContactInfoItem {
  icon: ContactIcon;
  value: string;
}

export type SocialIcon = "youtube" | "instagram" | "facebook" | "linkedin";

export interface SocialLink {
  icon: SocialIcon;
  link: string;
}

export interface ContactLocationData {
  title: string;
  city: string;
  address: string;
  workingHours: {
    weekdays: string;
    saturday: string;
  };
  mapUrl: string;
}


