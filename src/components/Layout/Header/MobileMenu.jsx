import { HeaderItem } from "../../../contatans/HeaderItem";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/icons/kamelino-logo.svg";
export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#2563EB]/10 backdrop-blur-sm back z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white/80 backdrop-blur-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 gap-3">
          <Link className="flex-none " to="/" aria-label="Brand">
            <img loading="lazy" src={logo} className="size-20" alt="logo" />
          </Link>
          <ul className="flex flex-col gap-4">
            {HeaderItem.map((Hitem) => (
              <li key={Hitem.id} className="font-bold text-black text-md">
                <Link
                  to={Hitem.src}
                  className="transition-all duration-300 hover:border-b hover:border-orangee hover:text-orangee py-2"
                  onClick={onClose}
                >
                  {Hitem.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col  gap-2">
            <button className="px-[30px] text-sm py-2.5 rounded-[10px] bg-orangee text-white flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
              تماس با ما
            </button>
            <button className="px-[30px] text-sm py-2.5 rounded-[10px] border border-orangee text-black flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-orangee hover:text-white">
              همکاری با ما
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
