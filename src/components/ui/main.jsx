import AboutKate from "./aboutKate";
import NewsSection from "./newsSection";
import HeroSection from "./heroSection";
import ProofSection from "./proofSection";
import ProofSection2 from "./proofSection2";
import SignUpSection from "./signUpSection";
import ServicesSection from "./servicesSection";
import Familytestimonial from "./familytestimonial";
import TestimonialSection from "./testimonialSection";
import UnconventionalPath from "./unconventionalPath";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <ProofSection />
      <ServicesSection />
      <UnconventionalPath />
      <TestimonialSection />
      <ProofSection2 />
      <Familytestimonial />
      <AboutKate />
      <NewsSection />
      <SignUpSection />
    </main>
  );
};

export default Main;
