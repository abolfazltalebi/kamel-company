import Buttons from "../Layout/Buttons";
import callToAction from "../../assets/images/coverCallToAction.webp";
import { motion } from "framer-motion";

export default function CallActionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5 container flex flex-wrap sm:flex-nowrap items-center justify-between gap-12"
    >
      <div className="w-full sm:w-1/2">
        <img loading="lazy" src={callToAction} className="" alt="" />
      </div>
      <div className="space-y-5">
        <h2 className="font-bold text-xl sm:text-4xl text-white">
          برای رشد کسب و کار خود اماده باشید و با ما در ارتباط باشید
        </h2>
       <p className="leading-[1.7rem] text-white text-md">
          مشاوران ما شما رو برای شروع راهنمایی میکند با ما در ارتباط باشید.
        </p>
        <Buttons titleOne={"تماس با ما"} titleTwo={"همکاری با ما"} />
      </div>
    </motion.section>
  );
}
