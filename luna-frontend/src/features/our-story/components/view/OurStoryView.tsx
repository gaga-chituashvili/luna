import { Team } from "@/features/our-story/Team";
import { Timeline } from "@/features/our-story/Timeline";
import { Values } from "@/features/our-story/Values";
import { Mission } from "@/features/our-story/Mission";
import { Hero } from "@/features/our-story/Hero";

export function OurStoryView() {
  return (
    <>
      <Hero />
      <Timeline />
      <Mission />
      <Values />
      <Team />
    </>
  );
}
