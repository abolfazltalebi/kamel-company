import Buttons from "../Layout/Buttons";
import callToAction from "../../assets/images/coverCallToAction.webp";

export default function CallActionSection() {
  return (
    <section className="space-y-5 container flex flex-wrap sm:flex-nowrap items-center justify-between gap-1">
      <div className="w-full sm:w-1/2">
        <img src={callToAction} className="" alt="" />
      </div>
      <div className="space-y-5">
        <h2 className="font-bold text-4xl text-white">
          برای رشد کسب و کار خود اماده باشید و با ما در ارتباط باشید
        </h2>
        <p className="text-white text-md">
          مشاوران ما شما رو برای شروع راهنمایی میکند با ما در ارتباط باشید.
        </p>
        <Buttons titleOne={"تماس با ما"} titleTwo={"همکاری با ما"} />
      </div>
    </section>
  );
}
