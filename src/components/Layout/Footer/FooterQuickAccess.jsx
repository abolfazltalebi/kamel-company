import { FooterQuickAcces } from "../../../contatans/Footer/FooterQuickAcces";
import { Link } from "react-router-dom";

export default function FooterQuickAccess() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-10 bg-orangee rounded-full"></div>
        <h4 className="text-white sm:text-xl font-bold">خدمات ما</h4>
      </div>
      <div className="mt-3  flex flex-col gap-5 text-sm">
        {FooterQuickAcces.map((FIAccess) => {
          return (
            <li key={FIAccess.id} className="text-white font-medium list-none">
              <Link
                to={FIAccess.src}
                className="transition-all duration-300 hover:bg-orangee px-3 py-2 rounded-xl "
              >
                {FIAccess.name}
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
