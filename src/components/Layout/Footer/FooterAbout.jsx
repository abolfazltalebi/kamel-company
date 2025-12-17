import { Link } from "react-router-dom";

export default function FooterAbout() {
  return (
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      <div className="flex items-center gap-2">
        <div className="w-2 h-10 bg-orangee rounded-full"></div>
        <h4 className="text-white sm:text-xl font-bold">درباره ما</h4>
      </div>
      <div className="mt-4">
        <Link
          className="flex-none text-xl font-semibold  focus:outline-none focus:opacity-80 text-white "
          to="/"
          aria-label="Brand"
        >
          موسسه تجاری کاملینو
        </Link>
       <p className="leading-[1.7rem] mt-3 text-xs sm:text-sm text-white/80 text-justify break-normal">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        </p>
      </div>
    </div>
  );
}
