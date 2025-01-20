import { Link } from "react-router-dom";

export default function FooterDescription() {
  return (
    <div className="pt-5 mt-5 border-t border-gray-200 container">
      <h2 className="text-center text-white text-sm">
        طراحی و توسعه وب سایت توسط{" "}
        <Link to="www.abolfazltalebii.ir" className="text-orangee font-bold">
          ابوالفضل طالبی
        </Link>{" "}
        انجام شه است.
      </h2>
    </div>
  );
}
