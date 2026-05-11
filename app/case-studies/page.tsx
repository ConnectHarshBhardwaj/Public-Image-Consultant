import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Hawk Strategies Delhi',
  description: 'Explore our portfolio of successful political campaigns and public image transformations in Delhi.',
};

export default function CaseStudiesPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F28C28]/10 border border-[#F28C28]/30 mb-8">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F28C28]">Classified Victories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Our <span className="text-[#F28C28]">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            Confidentiality prevents us from sharing complete details of our high-profile clients, but here is a glimpse into our impact methodologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="glass-card p-8 rounded-xl border border-white/5 hover:border-[#F28C28]/30 transition-all duration-300">
              <div className="text-sm text-[#F28C28] font-bold tracking-widest mb-2 uppercase">2023 Municipal Elections</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ward-Level Anti-Incumbency Reversal</h3>
              <p className="text-gray-400 mb-6">Transformed a negative public sentiment rating of 62% into a decisive 14% victory margin through hyper-local narrative engineering and WhatsApp constituency mapping.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300 flex items-center gap-2"><span className="text-[#F28C28]">•</span> +450% Digital Reach</li>
                <li className="text-gray-300 flex items-center gap-2"><span className="text-[#F28C28]">•</span> 42 Dedicated Viral Audio Tracks</li>
              </ul>
              <Link href="/contact" className="text-sm font-bold text-white uppercase hover:text-[#F28C28] transition-colors">Discuss Strategy →</Link>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-white/5 hover:border-[#F28C28]/30 transition-all duration-300">
              <div className="text-sm text-[#F28C28] font-bold tracking-widest mb-2 uppercase">Crisis Management</div>
              <h3 className="text-2xl font-bold text-white mb-4">Sentiment Stabilization & Recovery</h3>
              <p className="text-gray-400 mb-6">Neutralized a coordinated defamation campaign against a senior Delhi leader within 48 hours utilizing rapid media syndication and alternative truth narrative deployment.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300 flex items-center gap-2"><span className="text-[#F28C28]">•</span> 15+ Favorable Mainstream Editorials</li>
                <li className="text-gray-300 flex items-center gap-2"><span className="text-[#F28C28]">•</span> 100% Core Base Retention</li>
              </ul>
              <Link href="/contact" className="text-sm font-bold text-white uppercase hover:text-[#F28C28] transition-colors">Discuss Strategy →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
