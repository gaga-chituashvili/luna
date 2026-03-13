import { Button } from "../ui/Button";
import { useNavigate } from "@tanstack/react-router";
import { ROUTES } from "../../routes/paths";
import { MoveRight } from "lucide-react";
import { RITUAL } from "../../constants/homeData";

export const Ritual = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative
      flex flex-col justify-center items-center gap-y-6
      py-24 px-6
      text-white
      bg-gradient-to-br from-black via-[#1a0f0a] to-[#2b1a12]
    "
    >
      <h4
        className="
        text-center
        text-2xl sm:text-3xl lg:text-4xl
        font-medium
        leading-snug
      "
      >
        {RITUAL.title1} <br />
        <span className="text-[#a36a4f]">{RITUAL.title2}</span>
      </h4>

      <p
        className="
        text-center
        max-w-2xl
        text-sm sm:text-base lg:text-lg
        text-gray-300
      "
      >
        {RITUAL.description}
      </p>

      <Button onClick={() => navigate({ to: ROUTES.shop })} variant="default">
        {RITUAL.buttonText} <MoveRight />
      </Button>
    </section>
  );
};
