import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, Shield, Search, TrendingUp, History, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reputation Management | Hawk Strategies',
  description: 'Advanced crisis management and political reputation engineering. We protect and elevate your public image.',
};

export default function ReputationManagementPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#F28C28] selection:text-black">
      {/* Hero Section */}
      <section className="py-24 bg-[#0A0A0A] relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F28C28]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F28C28]/10 border border-[#F28C28]/30 mb-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F28C28]">Narrative Control</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-white">
            Reputation <br className="hidden md:block"/>
            <span className="text-[#F28C28]">Management</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
            Absolute narrative control. We neutralize defamation, handle political crises, and architect an unshakeable digital footprint for leaders and public figures.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-black tracking-wide uppercase hover:bg-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
               Secure Your Reputation
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Guarding Your <span className="text-[#F28C28]">Political Capital</span></h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                In politics, perception is reality. A single negative narrative can erase years of public service. Hawk Strategies offers elite reputation management designed for the high-stakes world of political consulting.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We utilize aggressive SEO suppression tactics, positive PR flooding, and rapid crisis response to protect your online identity. Whether you are facing a coordinated media attack or seeking to reshape your public brand, we establish total dominance over search results and social sentiment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldAlert, title: "Crisis Management", desc: "Rapid response to neutralize political and PR crises." },
                { icon: Search, title: "SEO Suppression", desc: "Pushing negative or false news off page one of Google." },
                { icon: UserCheck, title: "Brand Trust", desc: "Rebuilding credibility within key voter demographics." },
                { icon: Shield, title: "Image Protection", desc: "Proactive defense of your digital and public persona." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#F28C28]/50 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#F28C28] mb-4" />
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow/Process */}
          <div className="mb-24">
             <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">The Reputation <span className="text-[#F28C28]">Protocol</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Damage Assessment", desc: "Analyzing the scope of the narrative attack across social and print media." },
                  { step: "02", title: "Strategic Suppression", desc: "Deploying counter-narratives and technical SEO to bury negative coverage." },
                  { step: "03", title: "Brand Re-Engineering", desc: "Flooding the ecosystem with high-authority, positive political PR." }
                ].map((phase, idx) => (
                  <div key={idx} className="relative p-6 border border-white/10 bg-[#01050b] rounded-sm text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F28C28]/10 text-[#F28C28] font-bold mb-4">{phase.step}</div>
                    <h4 className="text-white font-bold text-xl mb-3">{phase.title}</h4>
                    <p className="text-sm text-gray-400">{phase.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="bg-[#F28C28]/5 border border-[#F28C28]/20 p-8 md:p-12 rounded-sm text-center">
             <h2 className="text-3xl font-heading font-bold text-white mb-6">Confidentiality Assured</h2>
             <p className="text-gray-400 max-w-3xl mx-auto mb-8">
               Our reputation management operations are conducted with strict operational security. We sign comprehensive NDAs with all clients to ensure absolute privacy regarding crisis interventions.
             </p>
             <Link href="/contact" className="inline-block bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-white transition-all">
                Initiate Defense Protocol
             </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
