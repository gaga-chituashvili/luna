import { Shop } from "../component/Shop";
import { Ritual } from "../component/ritual/Ritual";
import { AboutLuna } from "../component/aboutLuna/AboutLuna";
import { WhyLuna } from "../component/whyuna/WhyLuna";
import { Rate } from "../component/rate/Rate";
import { Coffees } from "../component/coffees/Coffees";

export const Home = () => {
  return (
    <>
      <Shop />
      <WhyLuna />
      <Coffees />
      <Rate />
      <AboutLuna />
      <Ritual />
    </>
  );
};
