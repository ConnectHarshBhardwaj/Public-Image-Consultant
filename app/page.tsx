import { HeroSection } from "@/components/HeroSection";
import { TickerLine } from "@/components/TickerLine";
import { CountersSection } from "@/components/CountersSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HighAuthoritySection } from "@/components/HighAuthoritySection";
import { AnimatedBanners } from "@/components/AnimatedBanners";
import { MCDElectionsSection } from "@/components/MCDElectionsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full relative selection:bg-[#F28C28] selection:text-black">
      <HeroSection />
      <TickerLine />
      <CountersSection />
      <HighAuthoritySection />
      <AnimatedBanners />
      <ServicesSection />
      <MCDElectionsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
