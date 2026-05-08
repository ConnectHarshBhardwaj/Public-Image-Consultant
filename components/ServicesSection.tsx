'use client';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Megaphone, Share2, PenTool, Video, MessageSquare, AtSign, Globe, Lock, Crown, Users, Target } from 'lucide-react';

const services = [
  { icon: Shield, title: "Political Image Engineering", description: "Strategic crafting and positioning of political personas to establish unshakeable authority and public trust across key demographics." },
  { icon: Target, title: "Booth-Level Election Management", description: "Granular, data-driven voter mobilization and micro-targeting strategies executed flawlessly at the booth level for maximum electoral impact." },
  { icon: Video, title: "Political Podcast & Digital Media Production", description: "High-end conceptualization and production of political podcasts, documentaries, and digital narratives to dominate modern media channels." },
  { icon: Megaphone, title: "Local News Channel Collaborations", description: "Exclusive syndication and narrative control through strategic partnerships with regional and hyper-local media networks." },
  { icon: Lock, title: "Confidential Political Survey Operations", description: "Discreet sentiment analysis, intelligence gathering, and pre-poll ground reality checks conducted with absolute operational secrecy." },
  { icon: Share2, title: "Social Media & Public Influence Management", description: "Aggressive digital ecosystem domination, narrative warfare capabilities, and viral content engineering for political leaders." }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
