import HeaderLogo from "./HeaderLogo";
import HeaderMain from "./HeaderMain";

export default function Header() {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-5 ">
      <nav className=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between gap-12 container">
        <HeaderLogo/>
        <HeaderMain/>
      </nav>
    </header>
  );
}
