import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdArrowBack } from "react-icons/io";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { services } from "../../contatans/services";

export default function ServicesSecton() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container space-y-5"
      id="khadamat"
    >
      <SectionTitle title="خدمات ما" subtitle="یا خدمات ما آشنا بشید" />
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
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="bg-blur backdrop-blur-sm rounded-2xl p-6 h-[320px] flex flex-col items-center justify-between gap-3">
              <img src={service.icon} className="size-20" alt="" />
              <h3 className=" text-xl font-bold">{service.title}</h3>
              <p className="text-xs text-justify">{service.description}</p>
              <button className="px-[30px] text-xs py-2.5 rounded-[10px] bg-orangee  flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
                سفارش دهید
                <IoMdArrowBack />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
