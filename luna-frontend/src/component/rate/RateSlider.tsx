import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowBigLeft, ArrowBigRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRates } from "../../api/api /hooks/useData";

export const RateSlider = () => {
  const { data: reviews = [] } = useRates();
  return (
    <section className="w-full py-28 px-6 bg-black text-white text-center relative overflow-visible">
      <h4 className="text-3xl md:text-4xl font-light mb-16">
        Trusted by{" "}
        <span className="text-[#B8735A]">
          coffee <br />
          lovers
        </span>{" "}
        across the city
      </h4>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:block cursor-pointer rate-prev">
        <ArrowBigLeft size={36} className="text-[#B8735A]" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:block cursor-pointer rate-next">
        <ArrowBigRight size={36} className="text-[#B8735A]" />
      </div>

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
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
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
                flex flex-col items-center
                gap-4
              "
            >
              <div>
                <p className="font-semibold">{review.fullname}</p>
                <p className="text-sm text-gray-600">{review.position}</p>
              </div>

              <div className="flex items-center space-x-1 text-amber-400">
                {Array.from({ length: review.rate }).map((_, index) => (
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
