import { Shop } from "@/features/shop/Shop";
import { Ritual } from "@/features/landing/Ritual";
import { AboutLuna } from "@/features/landing/AboutLuna";
import { WhyLuna } from "@/features/landing/WhyLuna";
import { RateSlider } from "@/features/rate/RateSlider";
import { Coffees } from "@/features/coffees/Coffees";

export default function Home() {
  return (
    <>
      <Shop />
      <WhyLuna />
      <Coffees />
      <RateSlider />
      <AboutLuna />
      <Ritual />
    </>
  );
}
