import AboutSection from "./AboutSection";
import CallActionSection from "./CallActionSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import PartnersSection from "./PartnersSection";
import ServicesSecton from "./ServicesSecton";
import TeamsSection from "./TeamsSection";
import WebLogSection from "./WebLogSection";

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
