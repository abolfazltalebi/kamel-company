import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdArrowBack } from "react-icons/io";
import SectionTitle from "../SectionTitle";
import instagram from "../../assets/images/icons/Instagram.svg";
import lineTeam from "../../assets/images/line-team.svg";
import linkedin from "../../assets/images/icons/LinkedIn.svg";
import { motion } from "framer-motion";
import { teamItems } from "../../contatans/TeamItem";

export default function TeamsSection() {
  return (
    <section className="container space-y-5">
      <SectionTitle title="تیم ما" subtitle="یا تیم ما آشنا بشید" />
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
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
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
        className="!pb-2"
      >
        {teamItems.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-between gap-3 relative"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={service.image}
                className="rounded-3xl"
                alt=""
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blur backdrop-blur-sm rounded-3xl p-3 w-[95%] relative -top-20 flex flex-col items-center justify-center gap-2"
              >
                <h3 className=" text-base sm:text-2xl font-extrabold">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-justify">
                  {service.job}
                </p>
                <div>
                  <img src={lineTeam} alt="" />
                </div>
                <div className="flex items-center justify-center sm:justify-between w-full">
                  <div className="hidden sm:flex items-center gap-1">
                    <img src={instagram} alt="" className="size-8" />
                    <img src={linkedin} alt="" className="size-6" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-[15px] text-xs py-2.5 rounded-[10px] bg-orangee flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:px-[20px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee"
                  >
                    مشاهده رزومه
                    <IoMdArrowBack />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
