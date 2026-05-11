import { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Hawk Strategies Delhi',
  description: 'Get in touch with Delhi\'s elite political PR and public image consulting agency.',
};

export default function ContactPage() {
  return (
    <main className="w-full relative pt-20">
      <div className="py-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Contact <span className="text-[#F28C28]">Us</span>
          </h1>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
