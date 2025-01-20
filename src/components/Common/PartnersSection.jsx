import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { patnersImage } from "../../contatans/partnersImage";

export default function PartnersSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="container space-y-5"
    >
      <SectionTitle title="همکاران ما" subtitle="یا همکاران ما آشنا بشید" />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        breakpoints={{
        
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
    </motion.section>
  );
}
