import type {
  HomeHeroData,
  WhyLunaCard,
  AboutLunaData,
  RitualData,
} from "@/api/type/homeData.types";
import coffee from "@/assets/coffee.png";
import lunaframe1 from "@/assets/lunaframe1.png";
import lunaframe2 from "@/assets/lunaframe2.png";
import lunaframe3 from "@/assets/lunaframe3.png";
import homecover from "@/assets/homecover.png";

export const HOME_HERO: HomeHeroData = {
  title: "Specialty coffee",
  highlight: "coffee",
  text1: "for calm, everyday",
  text2: "moments.",
  imageAlt: "coffeeimg",
  image: coffee,
  buttons: {
    shop: "Shop Coffee",
    story: "Our Story",
  },
};

export const WHY_LUNA: WhyLunaCard[] = [
  {
    img: lunaframe1,
    title: "Carefully Sourced Beans",
    text: "Carefully selected blends, chosen by our customers for everyday moments of calm.",
  },
  {
    img: lunaframe2,
    title: "Thoughtfully Roasted",
    text: "Each batch is roasted with precision to highlight the natural character of the beans, never overpowering them.",
  },
  {
    img: lunaframe3,
    title: "Designed for Calm Moments",
    text: "Luna is created for everyday rituals – coffee that supports focus, comfort, and quiet enjoyment.",
  },
];

export const ABOUT_LUNA: AboutLunaData = {
  title: "About",
  highlight: "Luna",
  description:
    "Luna was created for people who see coffee as a moment of pause, not rush.",
  buttonText: "Discover Our Story",
  image: homecover,
  imageAlt: "Home Cover",
};


export const RITUAL: RitualData = {
  title1: "Start your daily coffee ritual",
  title2: "with Luna.",
  description:
    "Thoughtfully crafted blends designed to bring calm, balance, and clarity to your everyday moments.",
  buttonText: "Shop Coffee",
};