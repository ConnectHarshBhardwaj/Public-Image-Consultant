import { Metadata } from 'next';
import { HighAuthoritySection } from '@/components/HighAuthoritySection';
import { CountersSection } from '@/components/CountersSection';

export const metadata: Metadata = {
  title: 'About Us | Public Image Consultant Delhi',
  description: 'Learn about Delhi\'s premier political PR agency. We build authority and influence for political leaders and campaigns.',
  openGraph: {
    title: 'About Us | Public Image Consultant Delhi',
    description: 'Learn about Delhi\'s premier political PR agency.',
  }
};

export default function AboutPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#D4AF37] selection:text-black">
      <div className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            About <span className="text-[#D4AF37]">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are the invisible force behind Delhi`s most prominent political figures, crafting narratives that resonate and building unshakeable public trust.
          </p>
        </div>
      </div>
      <HighAuthoritySection />
      <CountersSection />
    </main>
  );
}
