import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political War Room Insights (Blog) | Hawk Strategies',
  description: 'Expert insights, strategies, and analysis on political PR and election campaign management from Delhi’s leading agency.',
};

export default function BlogPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 mb-8">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#1E3A8A]">War Room Dispatches</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0B1A2E] font-heading mb-6 tracking-tight">
            Our <span className="text-[#1E3A8A]">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Strategic literature and tactical breakdowns on modern political warfare and public perception.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#1E3A8A]/30 shadow-sm transition-all duration-300">
              <div className="text-sm text-[#1E3A8A] font-bold tracking-widest mb-2 uppercase">May 18, 2024</div>
              <h3 className="text-2xl font-bold text-[#0B1A2E] mb-4">How Social Media Campaigns Can Win Elections in 2026</h3>
              <p className="text-gray-500 mb-6">A comprehensive guide on leveraging social media, AI, and strategic political branding to master digital warfare...</p>
              <Link href="/blog/social-media-election-2026" className="text-sm font-bold text-[#1E3A8A] uppercase hover:text-[#0B1A2E] transition-colors">Read Full Intel →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#1E3A8A]/30 shadow-sm transition-all duration-300">
              <div className="text-sm text-[#1E3A8A] font-bold tracking-widest mb-2 uppercase">May 15, 2024</div>
              <h3 className="text-2xl font-bold text-[#0B1A2E] mb-4">Navigating Anti-Incumbency Through Digital PR</h3>
              <p className="text-gray-500 mb-6">How algorithms and rapid narrative response units are changing the traditional mechanics of ward-level sentiment...</p>
              <Link href="#" className="text-sm font-bold text-[#1E3A8A] uppercase hover:text-[#0B1A2E] transition-colors">Read Full Intel →</Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#1E3A8A]/30 shadow-sm transition-all duration-300">
              <div className="text-sm text-[#1E3A8A] font-bold tracking-widest mb-2 uppercase">May 10, 2024</div>
              <h3 className="text-2xl font-bold text-[#0B1A2E] mb-4">The New Standard for MCD Declarations</h3>
              <p className="text-gray-500 mb-6">A framework for establishing authority locally before making your official political bid, emphasizing high-production media...</p>
              <Link href="#" className="text-sm font-bold text-[#1E3A8A] uppercase hover:text-[#0B1A2E] transition-colors">Read Full Intel →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
