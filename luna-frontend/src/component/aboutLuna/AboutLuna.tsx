import { Button } from "../ui/Button";
import { ABOUT_LUNA } from "../../constants/homeData";

export const AboutLuna = () => {
  return (
    <section
      className="
        relative
        flex flex-col items-center
        gap-y-6
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
        "
      >
        {ABOUT_LUNA.title}{" "}
        <span className="text-[#a36a4f]">{ABOUT_LUNA.highlight}</span>
      </h4>

      <p
        className="
          text-center
          max-w-xl
          text-sm sm:text-base lg:text-lg
          text-gray-300
        "
      >
        {ABOUT_LUNA.description}
      </p>

      <Button variant="default">{ABOUT_LUNA.buttonText}</Button>

      <div
        className="
          mt-16
          w-full
          max-w-6xl
          rounded-3xl
          overflow-hidden
          shadow-2xl
        "
      >
        <img
          src={ABOUT_LUNA.image}
          alt={ABOUT_LUNA.imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};
