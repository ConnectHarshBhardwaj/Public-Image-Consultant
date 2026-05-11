import { Metadata } from 'next';
import { ServicesSection } from '@/components/ServicesSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political PR Services | Hawk Strategies Delhi',
  description: 'Comprehensive public relations and election campaign management services for politicians in Delhi.',
};

export default function ServicesPage() {
  return (
    <main className="w-full relative pt-20">
      <div className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Our Elite <span className="text-[#F28C28]">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Precision-engineered public relations, narrative warfare, and digital ecosystem domination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/electoral-data-management" className="text-xs uppercase tracking-widest text-[#F28C28] hover:text-white border border-[#F28C28]/30 px-4 py-2 rounded-full transition-colors">Electoral Data Management</Link>
            <Link href="/services/campaign-management" className="text-xs uppercase tracking-widest text-[#F28C28] hover:text-white border border-[#F28C28]/30 px-4 py-2 rounded-full transition-colors">Campaign Management</Link>
            <Link href="/services/reputation-management" className="text-xs uppercase tracking-widest text-[#F28C28] hover:text-white border border-[#F28C28]/30 px-4 py-2 rounded-full transition-colors">Reputation Management</Link>
            <Link href="/services/social-media-pr" className="text-xs uppercase tracking-widest text-[#F28C28] hover:text-white border border-[#F28C28]/30 px-4 py-2 rounded-full transition-colors">Social Media PR</Link>
            <Link href="/services/media-coverage" className="text-xs uppercase tracking-widest text-[#F28C28] hover:text-white border border-[#F28C28]/30 px-4 py-2 rounded-full transition-colors">Media Coverage</Link>
          </div>
        </div>
      </div>
      <ServicesSection />
    </main>
  );
}
