import aboutImage from "../../assets/images/aboutSection.webp";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section  initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }} className="container space-y-5">
      <div className="flex items-center justify-center">
        <h2 className="text-center text-xl sm:text-3xl text-white font-bold">
          درباره ما
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between">
        <div className="space-y-5 order-last sm:order-first">
          <h2 className=" text-base sm:text-3xl text-white font-bold">
            با ما کسب وکار خود را باتکنولوژی روز به روز اوج خود برسانید
          </h2>
          <p className="text-justify text-white/75 text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <button className="px-[30px] text-sm py-2.5 rounded-[10px] bg-orangee text-white flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
            تماس با ما
          </button>
        </div>
        <div>
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </motion.section>
  );
}
