import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/paths";
import { MoveRight } from "lucide-react";

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
        Start your daily coffee ritual <br />
        <span className="text-[#a36a4f]">with Luna.</span>
      </h4>

      <p
        className="
        text-center
        max-w-2xl
        text-sm sm:text-base lg:text-lg
        text-gray-300
      "
      >
        Thoughtfully crafted blends designed to bring calm, balance, and clarity
        to your everyday moments.
      </p>

      <Button onClick={() => navigate(ROUTES.shop)} variant="default">
        Shop Coffee <MoveRight />
      </Button>
    </section>
  );
};
