import Buttons from "../Layout/Buttons";
import heroSection from "../../assets/images/heroSection.webp";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-section w-full ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4 container mt-8 py-8 relative"
      >
        <div className="space-y-6 order-1 md:order-0">
          <div className="bg-blur px-4 py-2 rounded-full inline-flex">
           <p className="leading-[1.7rem] text-sm">دنیای جدید نوآوری و تجارت رو با ما تجربه کنید</p>
          </div>
          <h2 className="text-base sm:text-3xl text-white leading-normal font-extrabold">
            تکنولوژی جدید و ارتباط جدید در دنیا با موسسه تجاری کاملینو تجربه کنید
          </h2>
         <p className="leading-[1.7rem] text-sm text-white/90 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
            از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
            متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <Buttons titleOne="تماس با ما" titleTwo="همکاری با ما" />
        </div>
        <div className="">
          <img loading="lazy" className="img-animation" src={heroSection} alt="" />
        </div>
      </motion.div>
    </section>
  );
}
