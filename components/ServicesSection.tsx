'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Shield, Target, Megaphone, Share2, TrendingUp, MonitorSmartphone, PenTool, Users, Database } from 'lucide-react';

const services = [
  { icon: Target, title: "Political Campaign Strategy", description: "Granular, data-driven voter mobilization and high-level macro strategy to win multi-tier elections.", link: "/services/campaign-management" },
  { icon: Database, title: "Electoral Data Management", description: "Strategic voter data analysis, constituency insights, booth-level management, and electoral intelligence solutions.", link: "/services/electoral-data-management" },
  { icon: Shield, title: "Public Reputation Management", description: "Establish unshakeable authority and public trust through calculated and high-level reputation management.", link: "/services/reputation-management" },
  { icon: Share2, title: "Social Media War Room", description: "Aggressive digital ecosystem domination, narrative warfare capabilities, and viral content engineering.", link: "/services/social-media-pr" },
  { icon: MonitorSmartphone, title: "Digital Political Advertising", description: "Hyper-targeted paid media acquisition, ensuring absolute visibility across key demographics.", link: "/services/social-media-pr" },
  { icon: TrendingUp, title: "Election Branding", description: "Brand architecture and visual identity scaling specifically designed to resonate with regional sensibilities.", link: "/services/campaign-management" },
  { icon: Megaphone, title: "Media & PR Management", description: "Local news channel collaborations, syndication, and press strategy to dominate the national narrative.", link: "/services/media-coverage" },
  { icon: PenTool, title: "Speech & Narrative Strategy", description: "Creating compelling manifestos, speech drafts, and political scripts driven by data-based intelligence.", link: "/services/campaign-management" }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#F28C28]/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h3 className="text-sm font-black text-[#F28C28] uppercase tracking-[0.3em] mb-4">Strategic Frameworks</h3>
            <p className="text-4xl md:text-5xl font-extrabold font-heading text-white">Full-Spectrum Political Strategy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative"
              >
                <Link href={service.link} className="block p-6 md:p-8 rounded-sm bg-[#0A0A0A] border border-white/5 hover:border-[#F28C28] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(242,140,40,0.15)] relative overflow-hidden flex flex-col h-full z-10 cursor-pointer">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F28C28]/20 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 mb-6 rounded-sm bg-white/5 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#F28C28]" />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl text-white mb-3 group-hover:text-[#F28C28] transition-colors leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400 mt-auto">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
