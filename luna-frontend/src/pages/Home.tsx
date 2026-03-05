import { Shop } from "../component/Shop";
import { Ritual } from "../component/ritual/Ritual";
import { AboutLuna } from "../component/aboutLuna/AboutLuna";
import { WhyLuna } from "../component/whyuna/WhyLuna";
import { RateSlider } from "../component/rate/RateSlider";
import { Coffees } from "../component/coffees/Coffees";

export const Home = () => {
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
};
