import CallActionSection from "../Common/CallActionSection";
import ContactSection from "../Common/ContactSection";
import HeroAboutSection from "./HeroAboutSection";
import PartnersSection from "../Common/PartnersSection";
import ServicesSecton from "../Common/ServicesSecton";
import TeamsSection from "../Common/TeamsSection";
import WebLogSection from "../Common/WebLogSection";

export default function AboutMe() {
  return (
    <>
      <HeroAboutSection />
      <PartnersSection />
      <ContactSection />
      <ServicesSecton />
      <CallActionSection />
      <TeamsSection />
      <WebLogSection />
    </>
  );
}
