import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowBigLeft, ArrowBigRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Rate = () => {
  const reviews = [
    {
      name: "David M.",
      position: "Marketing Manager",
      rating: 5,
      comment:
        "I tried Luna out of curiosity, but stayed for the quality. Every blend feels carefully crafted, and you can really tell the difference from mass-market coffee.",
    },
    {
      name: "Anna K.",
      position: "Product Designer",
      rating: 5,
      comment:
        "Luna has become part of my morning routine. The taste is smooth, balanced, and never overwhelming. It’s the kind of coffee that helps you start the day calmly and focused.",
    },
    {
      name: "Nino G.",
      position: "Freelance Illustrator",
      rating: 5,
      comment:
        "Luna is not just coffee — it’s a small daily ritual. I love how consistent the flavor is and how it fits perfectly into slow, creative mornings.",
    },
  ];

  return (
    <section className="w-full py-28 px-6 bg-black text-white text-center relative overflow-visible">
      {/* Title */}
      <h4 className="text-3xl md:text-4xl font-light mb-16">
        Trusted by{" "}
        <span className="text-[#B8735A]">
          coffee <br />
          lovers
        </span>{" "}
        across the city
      </h4>

      {/* Arrows */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:block cursor-pointer rate-prev">
        <ArrowBigLeft size={36} className="text-[#B8735A]" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:block cursor-pointer rate-next">
        <ArrowBigRight size={36} className="text-[#B8735A]" />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".rate-prev",
          nextEl: ".rate-next",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={3}
        initialSlide={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {reviews.map((review, i) => (
          <SwiperSlide
            key={i}
            className="
              transition-transform duration-500 ease-in-out
              scale-90 opacity-70
              [&.swiper-slide-active]:scale-110
              [&.swiper-slide-active]:opacity-100
              [&.swiper-slide-active]:shadow-2xl
            "
          >
            <article
              className="
                bg-[#e7e4e2]
                text-black
                rounded-3xl
                px-8 py-10
                h-full
                flex flex-col
                gap-4
              "
            >
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-600">{review.position}</p>
              </div>

              <div className="flex items-center space-x-1 text-amber-400">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-gray-800">
                {review.comment}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
