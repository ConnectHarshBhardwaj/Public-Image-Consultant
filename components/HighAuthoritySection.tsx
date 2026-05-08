'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const targets = [
  "Political Leaders",
  "Influencers",
  "Public Personalities",
  "Social Leaders",
  "Digital Creators",
  "Corporate Brands"
];

export function HighAuthoritySection() {
  return (
    <section className="py-24 bg-[#050B18] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B22222]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 leading-tight">
              Trusted by <span className="text-[#D4AF37]">Political Leaders</span> & Public Figures
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We operate at the highest level of Indian politics and public relations. Our strategies have secured victories, salvaged reputations, and built undeniable authority for the nation&apos;s most prominent figures.
            </p>
            
            <ul className="space-y-4 mb-10">
              {targets.map((target, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{target}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="https://picsum.photos/seed/leader/800/1200"
              alt="Public Profile Authority"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-[#030B17]/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">Campaign Success</div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">National Election Strategy</h3>
                <p className="text-gray-300 text-sm">Orchestrated a 360° digital and grassroots media campaign that shifted public perception by 40% in key demographics.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
