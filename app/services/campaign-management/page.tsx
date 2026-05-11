import { Metadata } from 'next';
import { MCDElectionsSection } from '@/components/MCDElectionsSection';
import Link from 'next/link';
import { Map, Flag, Users, MonitorSmartphone, Activity, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campaign Management | Hawk Strategies',
  description: 'Data-driven and high-impact political campaign management covering booth-level strategy to elite reputation PR.',
};

export default function PoliticalCampaignPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#F28C28] selection:text-black">
      {/* Hero Section */}
      <section className="py-24 bg-[#0A0A0A] relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F28C28]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F28C28]/10 border border-[#F28C28]/30 mb-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F28C28]">End-to-End Command</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-white">
            Campaign <br className="hidden md:block"/>
            <span className="text-[#F28C28]">Management</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
            End-to-end command center operations for modern elections. We architect undeniable victories through strategic engineering, offline mobilization, and digital dominance.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-black tracking-wide uppercase hover:bg-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Secure Your Victory
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Orchestrating <span className="text-[#F28C28]">Electoral Success</span></h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A successful political campaign requires more than just mass appeal; it demands tactical execution at every level. Hawk Strategies acts as your central command, translating macro-political vision into micro-level operational reality.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From organizing high-impact rallies to executing stealthy booth-level mobilization, our Campaign Management division integrates traditional political groundwork with high-tech digital amplification to ensure comprehensive narrative dominance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Map, title: "Election Planning", desc: "Comprehensive macro and micro strategy development." },
                { icon: Flag, title: "Rally Management", desc: "Executing massive on-ground events and roadshows." },
                { icon: Target, title: "Ground Coordination", desc: "Cadre mobilization and booth-level worker alignment." },
                { icon: Activity, title: "Voter Engagement", desc: "Omnichannel outreach and sentiment driving." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#F28C28]/50 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#F28C28] mb-4" />
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F28C28]/5 border border-[#F28C28]/20 p-8 md:p-12 rounded-sm text-center mb-24">
             <h2 className="text-3xl font-heading font-bold text-white mb-6">Built to Win.</h2>
             <p className="text-gray-400 max-w-3xl mx-auto mb-8">
               We don't accept standard campaigns. We run highly structured corporate-style political operations designed for maximum efficiency and electoral output.
             </p>
             <Link href="/contact" className="inline-block bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-white transition-all">
                Talk to a Strategist
             </Link>
          </div>
        </div>
      </section>

      <MCDElectionsSection />
    </main>
  );
}
