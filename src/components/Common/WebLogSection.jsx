import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdArrowBack } from "react-icons/io";
import SectionTitle from "../SectionTitle";
import lineTeam from "../../assets/images/line-team.svg";
import { motion } from "framer-motion";
import { weblogItems } from "../../contatans/weblogItem";

export default function WebLogSection() {
  return (
    <section className="container space-y-5">
    <SectionTitle title="وبلاگ ما" subtitle="با وبلاگ ما بروز باشید."/>
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
        className="!pb-16"
      >
        {weblogItems.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-blur backdrop-blur-sm rounded-xl p-3  flex flex-col items-center justify-center gap-2 sm:h-[360px]"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={service.image}
                className="rounded-xl"
                alt=""
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className=" text-base  font-extrabold">{service.title}</h3>
                <p className="text-xs text-justify line-clamp-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <div>
                  <img src={lineTeam} className="w-full" alt="" />
                </div>
                <div className="flex items-center justify-center w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-[15px] text-xs py-2.5 rounded-[10px] bg-orangee flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:px-[20px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee"
                  >
                    خواندن مطلب
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
