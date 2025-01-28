import Instagram from "../../assets/images/icons/Instagram.svg";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/images/icons/LinkedIn.svg";
import WhatsApp from "../../assets/images/icons/WhatsApp.svg";
import contactMe from "../../assets/images/contactMe.webp";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="container grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4"
    >
      <div className="flex items-center justify-center">
        <img src={contactMe} className="h-[300px] sm:h-[400px]" alt="" />
      </div>
      <div className="space-y-5">
        <h2 className="text-xl sm:text-3xl text-white font-bold">
          راه های ارتباطی ما
        </h2>
       <p className="leading-[1.7rem] text-sm text-white/75">
          با خیال راحت تماس بگیرید، باعث خوشحالی شما خواهد شد برای اینکه بتوانم
          در رشد کسب و کار خود به شما کمک کنم، اکنون با من تماس بگیرید!
        </p>
        <div className="flex flex-col gap-3">
          <Link to={"/"}>
            <div className="bg-blur px-3 py-2 rounded-full sm:w-2/3 flex items-center gap-2 ">
              <img src={Instagram} className="size-7" alt="" />
             <p className="leading-[1.7rem] text-sm">
                موسسه تجاری کامل را در
                <span className="text-red-700">اینستاگرام</span> دنبال کنید
              </p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="bg-blur px-3 py-2 rounded-full sm:w-2/3 flex items-center gap-2 ">
              <img src={LinkedIn} className="size-6" alt="" />
             <p className="leading-[1.7rem] text-sm">
                موسسه تجاری کامل را در
                <span className="text-blue-600">لینکدین</span> دنبال کنید
              </p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="bg-blur px-3 py-2 rounded-full sm:w-2/3 flex items-center gap-2 ">
              <img src={WhatsApp} className="size-6" alt="" />
             <p className="leading-[1.7rem] text-sm">
                برای ارتباط بهتر با ما در واتس آپ با ما صحبت کنید
              </p>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
