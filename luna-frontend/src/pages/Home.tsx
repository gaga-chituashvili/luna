import { Shop } from "../component/Shop"
import { Ritual } from "../component/ritual/Ritual"
import { AboutLuna } from "../component/aboutLuna/AboutLuna"
import { WhyLuna } from "../component/whyuna/WhyLuna"
import { Rate } from "../component/rate/Rate"

export const Home = () => {
  return (
    <>
      <Shop />
      <WhyLuna/>
      <Rate />
      <AboutLuna />
      <Ritual />
    </>
  )
}
