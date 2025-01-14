import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
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
          className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700  dark:hover:bg-white/10 dark:focus:bg-white/10"
          id="hs-navbar-example-collapse"
          aria-expanded="false"
          aria-controls="hs-navbar-example"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-navbar-example"
        >
          <CiMenuFries className="hs-collapse-open:hidden shrink-0 size-4" />
          <IoMdClose className="hs-collapse-open:block hidden shrink-0 size-4" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </div>
  );
}
