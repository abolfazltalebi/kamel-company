import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSecton from "./ServicesSecton";
import PartnersSection from "./PartnersSection";
import ContactSection from "./ContactSection";
// import TeamsSection from "./TeamsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSecton />
      <ContactSection />
      {/* <TeamsSection /> */}
    </>
  );
}
