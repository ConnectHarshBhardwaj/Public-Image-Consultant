import { Metadata } from 'next';
import { MCDElectionsSection } from '@/components/MCDElectionsSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political Campaign Management | Public Image Consultant',
  description: 'Data-driven and high-impact political campaign management covering booth-level strategy to elite reputation PR.',
};

export default function PoliticalCampaignPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Political Campaign <span className="text-[#D4AF37]">Management</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            End-to-end command center operations for modern elections. We architect undeniable victories through strategic engineering.
          </p>
        </div>
      </div>
      <MCDElectionsSection />
    </main>
  );
}
