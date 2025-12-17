import { useState, useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMain from "./HeaderMain";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed  left-0 right-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap ${
        isScrolled ? "rounded-none w-full top-0" : "rounded-full top-5 w-[95%]"
      } mx-auto bg-header  text-sm py-2 transition-all duration-200`}
    >
      <nav className=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between gap-12 container">
        <HeaderLogo />
        <HeaderMain />
      </nav>
    </header>
  );
}
