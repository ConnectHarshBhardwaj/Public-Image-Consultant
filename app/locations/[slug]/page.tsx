'use client';
import { useParams } from 'next/navigation';
import { AreaExplorer } from '@/components/AreaExplorer';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { CallToAction } from '@/components/CallToAction';
import Image from 'next/image';

import { areasData } from '@/lib/data';

export default function LocationDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const areaInfo = areasData.find(a => a.slug === slug);
  const locationName = areaInfo?.name || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="w-full relative selection:bg-[#B8860B] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      <section className="relative w-full h-[60vh] bg-black">
        <Image 
          src="https://images.unsplash.com/photo-1416331108676-e2a2202ed724?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt={locationName}
          fill
          className="object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <span className="text-[#B8860B] font-semibold uppercase tracking-[0.3em] text-[10px] mb-6 block">Area Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-light font-heading text-white mb-6 tracking-tight text-center">
            {locationName}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light text-center">
            Discover the finest residential estates, commercial hubs, and high-ROI investment plots available right now in {locationName}.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-80px] relative z-20 mb-24">
        <div className="bg-white p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100">
           <div className="text-center mb-10 border-b border-gray-100 pb-8">
             <h3 className="text-3xl font-heading text-black mb-2">Interested in {locationName}?</h3>
             <p className="text-gray-500 text-sm font-light">Register your requirement for exclusive unlisted properties.</p>
           </div>
           
           <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="space-y-1">
               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
               <input type="text" className="w-full bg-transparent border-b border-gray-200 text-black py-2 focus:outline-none focus:border-[#B8860B] transition-colors" />
             </div>
             
             <div className="space-y-1">
               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Phone</label>
               <input type="tel" className="w-full bg-transparent border-b border-gray-200 text-black py-2 focus:outline-none focus:border-[#B8860B] transition-colors" />
             </div>
             
             <div className="space-y-1">
               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Budget Range</label>
               <select className="w-full bg-transparent border-b border-gray-200 text-black py-2 focus:outline-none focus:border-[#B8860B] transition-colors appearance-none mt-[2px]">
                 <option>Under 1 Cr</option>
                 <option>1 Cr - 3 Cr</option>
                 <option>3 Cr+</option>
               </select>
             </div>
             
             <div className="flex items-end">
               <button type="button" className="w-full bg-black hover:bg-[#B8860B] text-white font-bold uppercase tracking-[0.2em] text-[10px] py-4 transition-colors">
                 Submit Details
               </button>
             </div>
           </form>
        </div>
      </div>

      <FeaturedProperties areaSlug={slug} />
      <AreaExplorer />
      <CallToAction />
    </main>
  );
}
