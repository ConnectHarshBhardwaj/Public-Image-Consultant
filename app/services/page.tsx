import { Metadata } from 'next';
import { ServicesSection } from '@/components/ServicesSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political PR Services | Public Image Consultant Delhi',
  description: 'Comprehensive public relations and election campaign management services for politicians in Delhi.',
};

export default function ServicesPage() {
  return (
    <main className="w-full relative pt-20">
      <div className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Our Elite <span className="text-[#D4AF37]">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Precision-engineered public relations, narrative warfare, and digital ecosystem domination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/political-campaign-management" className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 px-4 py-2 rounded-full transition-colors">Campaign Management</Link>
            <Link href="/reputation-management" className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 px-4 py-2 rounded-full transition-colors">Reputation Management</Link>
            <Link href="/social-media-pr" className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 px-4 py-2 rounded-full transition-colors">Social Media PR</Link>
            <Link href="/media-coverage" className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 px-4 py-2 rounded-full transition-colors">Media Coverage</Link>
          </div>
        </div>
      </div>
      <ServicesSection />
    </main>
  );
}
