import { Metadata } from 'next';
import { Database, BarChart3, LineChart, Target, PieChart, Focus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export const metadata: Metadata = {
  title: 'Electoral Data Management | Hawk Strategies',
  description: 'Strategic voter data analysis, constituency insights, booth-level management, and electoral intelligence solutions for modern political campaigns.',
};

export default function ElectoralDataManagementPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#F28C28] selection:text-black">
      {/* Hero Section */}
      <section className="py-24 bg-[#0A0A0A] relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F28C28]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F28C28]/10 border border-[#F28C28]/30 mb-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F28C28]">Strategic Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-white">
            Electoral Data <br className="hidden md:block"/>
            <span className="text-[#F28C28]">Management</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
            Strategic voter data analysis, constituency insights, booth-level management, and electoral intelligence solutions for modern political campaigns. We turn complex data into winning elections.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-black tracking-wide uppercase hover:bg-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Book Data Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Master the Electorate with <span className="text-[#F28C28]">Granular Intelligence</span></h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Elections are no longer won purely on intuition; they are won on precise, actionable intelligence. Our Electoral Data Management service provides a comprehensive blueprint of your constituency, breaking down demographics, voting patterns, and real-time public sentiment.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We empower political leaders and campaign managers to make tactical decisions based on hard data. By mapping booth-level matrices, identifying swing zones, and classifying voter priority targets, we ensure every resource—both human and capital—is deployed with maximum efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: BarChart3, title: "Voter Profiling", desc: "Deep demographic and psychographic segmentation." },
                { icon: MapPinArea, title: "Booth-Level Analysis", desc: "Micro-targeting at the individual polling booth scale." },
                { icon: LineChart, title: "Survey Management", desc: "Sentiment analysis and real-time ground feedback." },
                { icon: Focus, title: "Strategic Insights", desc: "Actionable intelligence for rally and campaign planning." }
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
             <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Data Integration <span className="text-[#F28C28]">Workflow</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Data Aggregation", desc: "Collecting historical election data, census reports, and public records for the target constituency." },
                  { step: "02", title: "Ground Surveys", desc: "Deploying discreet ground intelligence teams to capture real-time voter sentiment and issues." },
                  { step: "03", title: "Predictive Modeling", desc: "Analyzing data sets to project scenarios, identify swing booths, and determine resource allocation." },
                  { step: "04", title: "Tactical Execution", desc: "Delivering actionable, day-to-day strategic dossiers to campaign managers and the candidate." }
                ].map((phase, idx) => (
                  <div key={idx} className="relative p-6 border border-white/10 bg-[#01050b] rounded-sm">
                    <div className="text-5xl font-black text-white/5 absolute top-2 right-4">{phase.step}</div>
                    <div className="text-[#F28C28] font-bold tracking-widest text-sm mb-4">PHASE {phase.step}</div>
                    <h4 className="text-white font-bold text-xl mb-3 relative z-10">{phase.title}</h4>
                    <p className="text-sm text-gray-400 relative z-10">{phase.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="bg-[#F28C28]/5 border border-[#F28C28]/20 p-8 md:p-12 rounded-sm text-center">
             <h2 className="text-3xl font-heading font-bold text-white mb-6">Why Choose Hawk Strategies?</h2>
             <p className="text-gray-400 max-w-3xl mx-auto mb-8">
               Our data team comprises seasoned electoral analysts and political strategists who understand the subtle nuances of Indian politics. We don't just provide spreadsheets; we provide a strategic war room perspective that connects numbers to actual ground realities.
             </p>
             <Link href="/contact" className="inline-block bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-white transition-all">
                Equip Your War Room
             </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

// Temporary icon component since MapPinArea isn't explicitly imported
function MapPinArea(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
