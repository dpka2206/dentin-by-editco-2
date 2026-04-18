import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TechnologyBand from "@/components/sections/TechnologyBand";
import DoctorsPreview from "@/components/sections/DoctorsPreview";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import FaqsPreview from "@/components/sections/FaqsPreview";
import ContactBand from "@/components/sections/ContactBand";
import SmileCta from "@/components/sections/SmileCta";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <TechnologyBand />
      <DoctorsPreview />
      <ReviewsPreview />
      <FaqsPreview />
      <ContactBand />
      <SmileCta />
    </main>
  );
};

export default HomePage;
