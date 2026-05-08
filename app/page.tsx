import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TickerLine } from "@/components/TickerLine";
import { CountersSection } from "@/components/CountersSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HighAuthoritySection } from "@/components/HighAuthoritySection";
import { AnimatedBanners } from "@/components/AnimatedBanners";
import { MCDElectionsSection } from "@/components/MCDElectionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="w-full relative selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <HeroSection />
      <TickerLine />
      <CountersSection />
      <HighAuthoritySection />
      <AnimatedBanners />
      <ServicesSection />
      <MCDElectionsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
