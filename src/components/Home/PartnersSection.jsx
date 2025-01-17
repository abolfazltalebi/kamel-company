import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { patnersImage } from "../../contatans/partnersImage";

export default function PartnersSection() {
  return (
    <section className="container space-y-5">
      <div className="flex items-center justify-center">
        <h2 className="text-center text-base sm:text-3xl text-white font-bold">
          همکاران ما
        </h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        className="bg-white p-3 rounded-full"
      >
        {[...patnersImage, ...patnersImage].map((pItem, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center p-3"
          >
            <img
              src={pItem.src}
              alt={pItem.alt}
              className="max-w-[120px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
