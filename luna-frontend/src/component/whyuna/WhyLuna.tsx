import lunaframe1 from "../../assets/lunaframe1.png";
import lunaframe2 from "../../assets/lunaframe2.png";
import lunaframe3 from "../../assets/lunaframe3.png";

const CardData = [
  {
    img: lunaframe1,
    title: "Carefully Sourced Beans",
    text: "Carefully selected blends, chosen by our customers for everyday moments of calm.",
  },
  {
    img: lunaframe2,
    title: "Thoughtfully Roasted",
    text: "Each batch is roasted with precision to highlight the natural character of the beans, never overpowering them.",
  },
  {
    img: lunaframe3,
    title: "Designed for Calm Moments",
    text: "Luna is created for everyday rituals – coffee that supports focus, comfort, and quiet enjoyment.",
  },
];

export const WhyLuna = () => {
  return (
    <section className="w-full bg-black py-24 px-6 flex flex-col items-center text-center">
      <h4 className="text-3xl md:text-4xl font-light text-white mb-4">
        Why <span className="text-[#B8735A]">Luna?</span>
      </h4>

      <p className="text-gray-400 max-w-2xl mb-16">
        Carefully selected blends, chosen by our customers for everyday moments
        of calm.
      </p>

      <div className="w-full max-w-4xl md:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {CardData.map((card, i) => (
          <article
            key={i}
            className="relative w-full aspect-[4/5] max-h-[28rem] md:max-h-none rounded-3xl overflow-hidden
            bg-gradient-to-b from-[#1a1a1a] to-black
            shadow-[0_0_3rem_rgba(184,115,90,0.15)]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div
              className="absolute bottom-0 w-full p-6
              bg-gradient-to-t from-[#3b231b] via-[#3b231bcc] to-transparent
              backdrop-blur-sm"
            >
              <span className="block text-lg text-white mb-2">
                {card.title}
              </span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
