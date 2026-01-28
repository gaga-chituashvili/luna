import { Button } from "../ui/Button"
import homecover from "../../assets/homecover.png"

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
        About <span className="text-[#a36a4f]">Luna</span>
      </h4>

      <p
        className="
          text-center
          max-w-xl
          text-sm sm:text-base lg:text-lg
          text-gray-300
        "
      >
        Luna was created for people who see coffee as a <br className="hidden sm:block" />
        moment of pause, not rush.
      </p>

      <Button
        className="
          mt-2
          rounded-full
          px-8 py-3
          bg-[#8b5a43]
          hover:bg-[#a36a4f]
          transition
          text-sm
        "
      >
        Discover Our Story
      </Button>

      
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
          src={homecover}
          alt="Home Cover"
          className="
            w-full
            h-auto
            object-cover
          "
        />
      </div>
    </section>
  )
}
