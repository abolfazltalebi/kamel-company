import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BackgroundSection from "../../assets/images/backgroundSection.webp";
import Buttons from "../Layout/Buttons";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import LinkedIn from "/src/assets/images/icons/Linkedin.svg";
import WhatsApp from "/src/assets/images/icons/WhatsApp.svg";
import aboutImage from "../../assets/images/aboutSection.webp";
import contactMe from "../../assets/images/contactMe.webp";
import digital from "../../assets/images/icons/Digital-marketing.svg";
import heroSection from "../../assets/images/heroSection.webp";
import instagram from "/src/assets/images/icons/Instagram.svg";
import partner1 from "../../assets/images/partner-1.webp";
import partner2 from "../../assets/images/partner-2.webp";
import partner3 from "../../assets/images/partner-3.webp";
import partner4 from "../../assets/images/partner-4.webp";
import partner5 from "../../assets/images/partner-5.webp";
import partner6 from "../../assets/images/partner-6.webp";
import partner7 from "../../assets/images/partner-7.webp";
import seo from "../../assets/images/icons/seo.svg";
import tarahiweb from "../../assets/images/icons/code-website.svg";
import ui from "../../assets/images/icons/UIUX.svg";
import wordpress from "../../assets/images/icons/wordpress.svg";

export default function Home() {
  const patnersImage = [
    { id: 1, src: partner1, alt: "porom-kompany" },
    { id: 2, src: partner2, alt: "digital-kompany" },
    { id: 3, src: partner3, alt: "funnel-kompany" },
    { id: 4, src: partner4, alt: "growbots-kompany" },
    { id: 5, src: partner5, alt: "braibiz-kompany" },
    { id: 6, src: partner6, alt: "honey-kompany" },
    { id: 7, src: partner7, alt: "ress-kompany" },
  ];
  const services = [
    {
      id: 1,
      title: "طراحی وب سایت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      icon: tarahiweb,
    },
    {
      id: 2,
      title: "طراحی سایت وردپرس",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      icon: wordpress,
    },
    {
      id: 3,
      title: "طراحی Ui Ux",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      icon: ui,
    },
    {
      id: 4,
      title: "دیجیتال مارکتینگ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      icon: digital,
    },
    {
      id: 5,
      title: "سئو و بهینه سازی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      icon: seo,
    },
  ];
  return (
    <>
      <section className="relative p">
        <div>
          <img src={BackgroundSection} alt="" />
        </div>
        <div className="absolute top-5 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 items-center justify-between container">
          <div className="space-y-6">
            <div className="bg-blur px-4 py-2 rounded-full inline-flex">
              <p className="text-sm">دنیای جدید تگنولوژی رو با ما تجربه کنید</p>
            </div>
            <h2 className="text-base sm:text-3xl text-white leading-6 font-extrabold">
              تکنولوژی جدید و ارتباط جدید در دنیا با موسسه تجاری کامل تجربه کنید
            </h2>
            <p className="text-sm text-white/75 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <Buttons titleOne="تماس با ما" titleTwo="همکاری با ما" />
          </div>
          <div>
            <img src={heroSection} alt="" />
          </div>
        </div>
      </section>
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
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
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
      <section className="container space-y-5">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-base sm:text-3xl text-white font-bold">
            درباره ما
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between">
          <div className="space-y-5">
            <h2 className=" text-base sm:text-3xl text-white font-bold">
              با ما کسب وکار خود را باتکنولوژی روز به روز اوج خود برسانید
            </h2>
            <p className="text-justify text-white/75 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <button className="px-[30px] text-sm py-2.5 rounded-[10px] bg-orangee text-white flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
              تماس با ما
            </button>
          </div>
          <div>
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </section>
      <section className="container space-y-5">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-base sm:text-3xl text-white font-bold">
            خدمات ما
          </h2>
        </div>
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
      </section>
      <section className="container grid grid-cols-1 sm:grid-cols-2">
        <div>
          <img src={contactMe} alt="" />
        </div>
        <div>
          <h2 className="text-base sm:text-xl text-white">
            راه های ارتباطی ما
          </h2>
          <p className="text-sm te">
            با خیال راحت تماس بگیرید، باعث خوشحالی شما خواهد شد برای اینکه
            بتوانم در رشد کسب و کار خود به شما کمک کنم، اکنون با من تماس بگیرید!
          </p>
          <div className="flex flex-col gap-3">
            <Link to={"/"}>
              <div className="bg-blur px-3 py-2 rounded-full w-2/3 flex items-center gap-2 ">
                <img src={instagram} className="size-7" alt="" />
                <p className="text-sm">
                  موسسه تجاری کامل را در{" "}
                  <span className="text-red-700">اینستاگرام</span> دنبال کنید
                </p>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="bg-blur px-3 py-2 rounded-full w-2/3 flex items-center gap-2 ">
                <img src={LinkedIn} className="size-6" alt="" />
                <p className="text-sm">
                  موسسه تجاری کامل را در{" "}
                  <span className="text-blue-600">لینکدین</span> دنبال کنید
                </p>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="bg-blur px-3 py-2 rounded-full w-2/3 flex items-center gap-2 ">
                <img src={WhatsApp} className="size-6" alt="" />
                <p className="text-sm">
                  برای ارتباط بهتر با ما در واتس آپ با ما صحبت کنید
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
