import { Metadata } from 'next';
import { ServicesSection } from '@/components/ServicesSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political PR Services | Hawk Strategies Delhi',
  description: 'Comprehensive public relations and election campaign management services for politicians in Delhi.',
};

export default function ServicesPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#1E3A8A] selection:text-white">
      <div className="py-24 bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-[#0B1A2E] font-heading mb-6 tracking-tight">
            Our Elite <span className="text-[#1E3A8A]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Precision-engineered public relations, narrative warfare, and digital ecosystem domination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/electoral-data-management" className="text-xs uppercase tracking-widest text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white border border-[#1E3A8A]/30 px-4 py-2 rounded-full transition-colors">Electoral Data Management</Link>
            <Link href="/services/campaign-management" className="text-xs uppercase tracking-widest text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white border border-[#1E3A8A]/30 px-4 py-2 rounded-full transition-colors">Campaign Management</Link>
            <Link href="/services/reputation-management" className="text-xs uppercase tracking-widest text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white border border-[#1E3A8A]/30 px-4 py-2 rounded-full transition-colors">Reputation Management</Link>
            <Link href="/services/social-media-pr" className="text-xs uppercase tracking-widest text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white border border-[#1E3A8A]/30 px-4 py-2 rounded-full transition-colors">Social Media PR</Link>
            <Link href="/services/media-coverage" className="text-xs uppercase tracking-widest text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white border border-[#1E3A8A]/30 px-4 py-2 rounded-full transition-colors">Media Coverage</Link>
          </div>
        </div>
      </div>
      <ServicesSection />
    </main>
  );
}
