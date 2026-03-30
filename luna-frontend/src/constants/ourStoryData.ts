import type {
  TimelineEvent,
  Value,
  TeamMember,
  Mission,
} from "@/api/type/ourStory.types";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";

export const HERO_DATA = {
  title: "Our Story",
  subtitle: "From a small roastery to your cup",
  description:
    "Luna Coffee began with a simple dream: to bring exceptional coffee to every home in Georgia. What started as a passion project in 2018 has grown into a beloved brand known for quality and care.",
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Luna Coffee was founded in Tbilisi with a single roasting machine and a dream to serve exceptional coffee.",
  },
  {
    year: "2019",
    title: "First Cafe Opens",
    description:
      "We opened our first cafe in Old Tbilisi, becoming a favorite spot for coffee lovers across the city.",
  },
  {
    year: "2021",
    title: "Expansion",
    description:
      "Expanded to three locations and launched our online store, bringing Luna to homes across Georgia.",
  },
  {
    year: "2024",
    title: "Award Winning",
    description:
      "Received the Best Coffee Roaster award and became Georgia's most loved coffee brand.",
  },
];

export const MISSION: Mission = {
  title: "Our Mission",
  description:
    "To craft exceptional coffee experiences that inspire moments of joy and connection, while supporting sustainable farming practices.",
  highlights: [
    "Source ethically from sustainable farms",
    "Roast with precision and care",
    "Deliver freshness to your door",
    "Build a community of coffee lovers",
  ],
};

export const VALUES: Value[] = [
  {
    icon: "☕",
    title: "Quality First",
    description:
      "We never compromise on the quality of our beans or the precision of our roasting process.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description:
      "From farm to cup, we prioritize environmentally responsible practices at every step.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "We believe in building relationships with farmers, partners, and coffee lovers.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We constantly explore new flavors, techniques, and ways to enhance your coffee experience.",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Giorgi Beridze",
    role: "Founder & Head Roaster",
    image: person1,
    bio: "With 15 years of experience, Giorgi brings passion and expertise to every roast.",
  },
  {
    id: 2,
    name: "Mariam Kakabadze",
    role: "Coffee Buyer",
    image: person3,
    bio: "Mariam travels the world sourcing the finest beans from sustainable farms.",
  },
  {
    id: 3,
    name: "Luka Jikia",
    role: "Barista Trainer",
    image: person2,
    bio: "Luka ensures every Luna barista delivers the perfect cup every time.",
  },
];
