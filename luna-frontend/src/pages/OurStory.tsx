import { Team } from "@/component/OurStory/Team";
import { Timeline } from "@/component/OurStory/Timeline";
import { Values } from "@/component/OurStory/Values";
import { Mission } from "@/component/OurStory/Mission";
import { Hero } from "@/component/OurStory/Hero";

export const OurStory = () => {
  return (
    <>
      <Hero />
      <Timeline />
      <Mission />
      <Values />
      <Team />
    </>
  );
};
