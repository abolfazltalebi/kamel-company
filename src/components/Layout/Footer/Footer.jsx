import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterDescription from "./FooterDescription";
import FooterQuickAccess from "./FooterQuickAccess";
import FooterServices from "./FooterServices";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-footer container">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <FooterAbout />
        <FooterServices />
        <FooterQuickAccess />
        <FooterContact />
        <FooterSocial />
      </div>
      <FooterDescription />
    </footer>
  );
}
