'use client';
import { motion } from 'motion/react';

const targets = [
  "Emerging Leaders",
  "Strategic Campaigns",
  "Data-Driven Ground Tactics",
  "High Impact Relations",
  "Media Dominance",
  "Leadership Branding"
];

export function HighAuthoritySection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#F28C28]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 leading-tight">
              Why Leaders Choose <span className="text-[#F28C28]">Hawk Strategies</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We provide elite political intelligence, ground-level strategy, and unparalleled media influence. Our operations are designed to build winning narratives and establish unshakeable leadership branding for top-tier political campaigns.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
              {targets.map((target, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F28C28] rounded-full shadow-[0_0_8px_rgba(242,140,40,0.8)]" />
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{target}</span>
                </li>
              ))}
            </ul>
          </motion.div>
      </div>
    </section>
  );
}
