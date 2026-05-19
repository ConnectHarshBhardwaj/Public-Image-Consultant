import { HeroSection } from "@/components/HeroSection";
import { TickerLine } from "@/components/TickerLine";
import { CountersSection } from "@/components/CountersSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HighAuthoritySection } from "@/components/HighAuthoritySection";
import { AnimatedBanners } from "@/components/AnimatedBanners";
import { MCDElectionsSection } from "@/components/MCDElectionsSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { MapSection } from "@/components/MapSection";
import { TimelineSection } from "@/components/TimelineSection";

export default function Home() {
  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white">
      <HeroSection />
      <TickerLine />
      <CountersSection />
      <HighAuthoritySection />
      <AnimatedBanners />
      <ServicesSection />
      <TimelineSection />
      <MapSection />
      <MCDElectionsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
