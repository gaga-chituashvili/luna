import { Button } from "../component/ui/Button";
import { useNavigate } from "@tanstack/react-router";
import { ROUTES } from "../routes/paths";
import { HOME_HERO } from "../constants/homeData";

export const Shop = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-12 pt-24 text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2b1b16] via-[#1a0f0c] to-black">
      <article className="flex flex-col gap-y-10 max-w-xl text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight tracking-tight">
          {HOME_HERO.title}{" "}
          <span className="px-4 py-1 bg-white text-[#6b3f2b] rounded-full">
            {HOME_HERO.highlight}
          </span>{" "}
          {HOME_HERO.text1}
          <br />
          {HOME_HERO.text2}
        </h2>

        <div className="flex gap-x-4 justify-center lg:justify-start">
          <Button variant="default">{HOME_HERO.buttons.shop}</Button>

          <Button
            onClick={() => navigate({ to: ROUTES.ourStory })}
            variant="secondary"
          >
            {HOME_HERO.buttons.story}
          </Button>
        </div>
      </article>

      <img
        src={HOME_HERO.image}
        alt={HOME_HERO.imageAlt}
        className="drop-shadow-2xl w-64 md:w-80 lg:w-auto"
      />
    </section>
  );
};
