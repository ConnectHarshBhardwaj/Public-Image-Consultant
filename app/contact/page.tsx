import { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Public Image Consultant Delhi',
  description: 'Get in touch with Delhi\'s elite political PR and public image consulting agency.',
};

export default function ContactPage() {
  return (
    <main className="w-full relative pt-20">
      <div className="py-12 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Contact <span className="text-[#D4AF37]">Us</span>
          </h1>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
