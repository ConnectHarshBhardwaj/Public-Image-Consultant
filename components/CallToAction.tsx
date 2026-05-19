'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[#B8860B] font-semibold uppercase tracking-[0.2em] text-xs mb-6 block">Take The Next Step</span>
          <h2 className="text-5xl md:text-7xl font-light font-heading text-white leading-tight mb-8">
            Ready to <span className="italic text-white/90">Invest?</span>
          </h2>
          <p className="text-lg text-white/60 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Schedule a private viewing with our luxury property consultants and discover Narela&apos;s finest real estate portfolio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="tel:+919310868777" className="bg-[#B8860B] text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors flex items-center justify-center">
              Call +91 93108 68777
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Schedule Site Visit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
