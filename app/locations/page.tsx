'use client';
import { AreaExplorer } from '@/components/AreaExplorer';
import { CallToAction } from '@/components/CallToAction';
import { MapPin } from 'lucide-react';

export default function LocationsPage() {
  return (
    <main className="w-full relative selection:bg-[#B8860B] selection:text-white pt-32 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Neighborhood Guide</span>
        <h1 className="text-5xl md:text-7xl font-light font-heading text-black mb-6">Narela Area <span className="italic text-gray-500">Guide</span></h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          Browse comprehensive luxury property listings across all primary sectors, pockets, and upcoming development corridors in Narela.
        </p>
      </div>

      <AreaExplorer />
      
      <CallToAction />
    </main>
  );
}
