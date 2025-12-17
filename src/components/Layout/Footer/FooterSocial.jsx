import Instagram from "/src/assets/images/icons/Instagram.svg";
import { Link } from "react-router-dom";
import LinkedIn from "/src/assets/images/icons/LinkedIn.svg";
import WhatsApp from "/src/assets/images/icons/WhatsApp.svg";

export default function FooterSocial() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-10 bg-orangee rounded-full"></div>
        <h4 className="text-white sm:text-xl font-bold">شبکه های اجتماعی ما</h4>
      </div>
      <div className="flex items-center  gap-4">
        <Link to={"/"}>
          <img loading="lazy" src={Instagram} className="size-9" alt="" />
        </Link>
        <Link to={"/"}>
          <img loading="lazy" src={LinkedIn} className="size-9" alt="" />
        </Link>
        <Link to={"/"}>
          <img loading="lazy" src={WhatsApp} className="size-9" alt="" />
        </Link>
      </div>
    </div>
  );
}
