import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowBack } from "react-icons/io";
import { teamItems } from "../../contatans/TeamItem";
export default function TeamsSection() {
  return (
    <section className="container space-y-5">
      <h2 className="text-base sm:text-3xl text-white font-bold">
        تیم ما
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !bg-orangee !w-4 !h-4"></span>`;
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="!pb-12"
      >
        {teamItems.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="bg-blur backdrop-blur-sm rounded-2xl p-6 h-[320px] flex flex-col items-center justify-between gap-3">
              <img src={service.image} className="size-20" alt="" />
              <h3 className=" text-xl font-bold">{service.name}</h3>
              <p className="text-xs text-justify">{service.job}</p>
              <button className="px-[30px] text-xs py-2.5 rounded-[10px] bg-orangee  flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
                سفارش دهید
                <IoMdArrowBack />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
