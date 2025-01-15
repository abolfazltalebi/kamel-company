import { Link } from "react-router-dom";

export default function FooterContact() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-10 bg-orangee rounded-full"></div>
        <h4 className="text-white sm:text-xl font-bold">تماس با ما</h4>
      </div>
      <div className="mt-3  flex flex-col gap-5 text-sm">
        <p className="text-white font-medium list-none">
          <Link
            to="tel:0214698000"
            className="transition-all duration-300 hover:border-b hover:border-orangee px-3 py-2 "
          >
            تلفن ثابت: 0214698000
          </Link>
        </p>
        <p className="text-white font-medium list-none">
          <Link to="/" className=" px-3 py-2  text-sm">
            آدرس :تهران خیابان انقلاب موسسه تجاری کامل
          </Link>
        </p>
        <p className="text-white font-medium list-none">
          <Link
            to="mailTo:suport@gmail.com"
            className="transition-all duration-300 hover:border-b hover:border-orangee px-3 py-2 "
          >
            ایمیل ما :suport@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
}
