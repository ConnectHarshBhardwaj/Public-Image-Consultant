'use client';
import { motion } from 'motion/react';
import { Target, Users, MapPin, Trophy } from 'lucide-react';

const targets = [
  {
    icon: Users,
    title: "Delhi Politicians & Corporators",
    description: "Solidify your local dominance. We build narratives that resonate with diverse wards, turning anti-incumbency into unparalleled public support."
  },
  {
    icon: Target,
    title: "New Election Candidates",
    description: "Enter the battlefield with an established image. We engineer instant credibility and high-voltage visibility for first-time challengers."
  },
  {
    icon: Trophy,
    title: "Youth Leaders",
    description: "Mobilize the demographic dividend. Our digital warfare and viral media strategies convert internet engagement into actual booth-level votes."
  },
  {
    icon: MapPin,
    title: "MCD 2027 Campaigns",
    description: "End-to-end election intelligence. From ward-level micro-targeting to confidental survey operations, we architect undeniable victories."
  }
];

export function MCDElectionsSection() {
  return (
    <section id="mcd-elections" className="py-24 bg-[#050B18] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#D4AF37]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B22222]/10 border border-[#B22222]/30 mb-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B22222]">Mission Critical</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-heading font-black text-white"
          >
            MCD Elections <span className="text-[#D4AF37]">2027</span> Command Center
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
          >
            The battle for Delhi has begun. We are actively inducting elite political candidates to engineer decisive victories across all 250 municipal wards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-xl relative group hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
