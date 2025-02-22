import AboutSection from "./AboutSection";
import CallActionSection from "../Common/CallActionSection";
import ContactSection from "../Common/ContactSection";
import HeroSection from "./HeroSection";
import PartnersSection from "../Common/PartnersSection";
import ServicesSecton from "../Common/ServicesSecton";
import TeamsSection from "../Common/TeamsSection";
import WebLogSection from "../Common/WebLogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSecton />
      <ContactSection />
      <TeamsSection />
      <CallActionSection />
      <WebLogSection />
    </>
  );
}
