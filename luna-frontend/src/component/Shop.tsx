import coffee from "../assets/coffee.png";
import { Button } from "../component/ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/paths";

export const Shop = () => {
  const navigate = useNavigate();
  return (
    <section
      className="
        w-full
        min-h-[80vh]
        flex items-center justify-between
        px-20
        text-white
        bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
        from-[#2b1b16]
        via-[#1a0f0c]
        to-black
      "
    >
      <article className="flex flex-col gap-y-10 max-w-xl">
        <h2 className="text-5xl font-semibold leading-tight tracking-tight">
          Specialty{" "}
          <span className="px-4 py-1 bg-white text-[#6b3f2b] rounded-full">
            coffee
          </span>{" "}
          for <br />
          calm, everyday <br />
          moments.
        </h2>

        <div className="flex gap-x-4">
          <Button variant="default">Shop Coffee</Button>

          <Button onClick={() => navigate(ROUTES.ourStory)} variant="secondary">
            Our Story
          </Button>
        </div>
      </article>

      <img src={coffee} alt="coffeeimg" className="drop-shadow-2xl" />
    </section>
  );
};
