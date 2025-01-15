import { Link } from "react-router-dom";

export default function FooterSocial() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-10 bg-orangee rounded-full"></div>
        <h4 className="text-white sm:text-xl font-bold">شبکه های اجتماعی ما</h4>
      </div>
      <div className="flex items-center  gap-4">
        <Link to={"/"}>
          <img src="/src/assets/images/icons/Instagram.svg" alt="" />
        </Link>
        <Link to={"/"}>
          <img src="/src/assets/images/icons/LinkedIn.svg" alt="" />
        </Link>
        <Link to={"/"}>
          <img src="/src/assets/images/icons/WhatsApp.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
