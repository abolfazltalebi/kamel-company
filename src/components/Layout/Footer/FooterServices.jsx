import { FooterItemKhadamat } from "../../../contatans/Footer/FooterItemKhadamat";
import { Link } from "react-router-dom";

export default function FooterServices() {
  return (
    <div>
    <div className="flex items-center gap-2 mb-5">
      <div className="w-2 h-10 bg-orangee rounded-full"></div>
      <h4 className="text-white sm:text-xl font-bold">خدمات ما</h4>
    </div>
    <div className="mt-3  flex flex-col gap-5 text-sm">
      {FooterItemKhadamat.map((Fitem) => {
        return (
          <li key={Fitem.id} className="text-white font-medium list-none">
            <Link
              to={Fitem.src}
              className="transition-all duration-300 hover:bg-orangee px-3 py-2 rounded-xl "
            >
              {Fitem.title}
            </Link>
          </li>
        );
      })}
    </div>
  </div>
  )
}
