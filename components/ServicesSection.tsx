'use client';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Megaphone, Share2, PenTool, Video, MessageSquare, AtSign, Globe, Lock, Crown, Users, Target } from 'lucide-react';

const services = [
  { icon: Shield, title: "Political PR", description: "Comprehensive public relations strategies tailored for political leaders and parties." },
  { icon: Target, title: "Election Campaign Branding", description: "End-to-end branding solutions to create a powerful and recognizable election presence." }, // wait Target doesn't exist, I'll fix imports
  { icon: Lock, title: "Reputation Management", description: "Proactive and reactive strategies to protect and enhance your public image." },
  { icon: Megaphone, title: "Press Release Distribution", description: "Strategic distribution of press releases to national and regional media outlets." },
  { icon: Share2, title: "Social Media Handling", description: "Expert management of official social media channels to maximize digital influence." },
  { icon: PenTool, title: "Graphic Designing", description: "High-impact visual creatives for rallies, campaigns, and digital platforms." },
  { icon: Video, title: "Professional Video Editing", description: "Cinematic political ads, speech highlights, and campaign video production." },
  { icon: MessageSquare, title: "Speech Branding", description: "Crafting powerful narratives and memorable speeches that resonate with the masses." },
  { icon: Globe, title: "Digital Campaign Gen.", description: "Data-driven digital marketing campaigns optimized for maximum voter outreach." },
  { icon: Users, title: "Media Outreach", description: "Building strong relationships with journalists and media houses." },
  { icon: Crown, title: "Public Figure Branding", description: "Elevating influencers and leaders into undeniable authorities in their domain." },
  { icon: TrendingUp, title: "SEO & Visibility", description: "Dominating search engine results to maintain informational authority." }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-2">Elite Services</h3>
            <p className="text-3xl md:text-4xl font-bold font-heading">Strategic Perception Management</p>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">
            Sanoth Village, Ghoga, Narela, Delhi
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 border border-white/10 hover:border-[#D4AF37] transition-all group bg-transparent"
              >
                <div className="w-10 h-10 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Icon className="w-full h-full text-[#D4AF37]" />
                </div>
                <h4 className="font-bold text-sm mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
