import Buttons from "../Buttons";
import { HeaderItem } from "../../../contatans/HeaderItem";
import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <>
      <div
        id="hs-navbar-example"
        className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block md:flex items-center justify-between "
        aria-labelledby="hs-navbar-example-collapse"
      >
        <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-start sm:mt-0 mb-6 sm:mb-0 sm:ps-5">
          {HeaderItem.map((Hitem) => {
            return (
              <li key={Hitem.id} className="font-bold text-black text-md ">
                <Link to={Hitem.src} className="transition-all duration-300 hover:border-b hover:border-orangee hover:text-orangee py-2 ">{Hitem.name}</Link>
              </li>
            );
          })}
        </ul>
        <Buttons titleOne=" تماس با ما" titleTwo=" همکاری با ما" />
      </div>
    </>
  );
}
