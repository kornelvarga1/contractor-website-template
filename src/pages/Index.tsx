import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SocialProof from "@/components/home/SocialProof";
import ServiceAreas from "@/components/home/ServiceAreas";
import SpecialsBanner from "@/components/home/SpecialsBanner";
import ContactFormSection from "@/components/home/ContactFormSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <SocialProof />
      <ServiceAreas />
      <SpecialsBanner />
      <ContactFormSection />
    </>
  );
};

export default Index;
