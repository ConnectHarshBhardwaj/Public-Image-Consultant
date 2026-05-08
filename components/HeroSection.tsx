'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#050B18]">
      {/* Background Visual Overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <Image 
          src="https://picsum.photos/seed/political/1920/1080" 
          alt="Political Campaign Background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading">
            Delhi&apos;s Premier <br className="hidden lg:block"/>
            <span className="text-[#D4AF37]">Political PR</span> <br className="hidden lg:block"/>
            & Public Image Consultancy
          </h2>

          <p className="max-w-xl text-lg text-gray-400 mb-8 leading-relaxed">
            We build authority, visibility, influence, and public trust for politicians, creators, public figures, and brands across Delhi through elite media strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#contact" className="bg-[#D4AF37] text-[#050B18] px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20">
              Start Your Campaign
            </a>
            <div className="flex items-center gap-4 sm:border-l border-white/20 sm:pl-6">
              <a href="tel:+919310868777" className="text-2xl font-bold hover:text-[#D4AF37] transition-colors">+91 93108 68777</a>
              <div className="text-[10px] text-gray-500 uppercase tracking-tighter leading-tight">Direct Media<br/>Hotline</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
