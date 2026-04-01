import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessSection from "@/components/home/ProcessSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import CtaBanner from "@/components/home/CtaBanner";

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesOverview />
      <ProcessSection />
      <GalleryPreview />
      <ReviewsSection />
      <FaqSection />
      <ServiceAreas />
      <CtaBanner />
    </>
  );
};

export default Index;
