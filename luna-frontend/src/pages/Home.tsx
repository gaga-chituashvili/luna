import { Shop } from "../component/Shop"
import { Ritual } from "../component/ritual/Ritual"
import { AboutLuna } from "../component/aboutLuna/AboutLuna"
import { WhyLuna } from "../component/whyuna/WhyLuna"

export const Home = () => {
  return (
    <>
      <Shop />
      <WhyLuna/>
      <AboutLuna />
      <Ritual />
    </>
  )
}
