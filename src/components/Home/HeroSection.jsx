import Buttons from "../Layout/Buttons";
import BackgroundSection from "../../assets/images/backgroundSection.webp";
import heroSection from "../../assets/images/heroSection.webp";
export default function HeroSection() {
  return (
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
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <Buttons titleOne="تماس با ما" titleTwo="همکاری با ما" />
        </div>
        <div>
          <img src={heroSection} alt="" />
        </div>
      </div>
    </section>
  );
}
