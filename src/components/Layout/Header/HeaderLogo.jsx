import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function HeaderLogo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <Link
        className="flex-none text-xl font-semibold  focus:outline-none focus:opacity-80 text-main "
        to="/"
        aria-label="Brand"
      >
        موسسه تجاری کامل
      </Link>
      <div className="sm:hidden">
        <button
          type="button"
          className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoMdClose className="size-4" />
          ) : (
            <CiMenuFries className="size-4" />
          )}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
