'use client';
import { motion } from 'motion/react';
import { BeforeAfterImage } from './BeforeAfterImage';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background Visual Overlay */}
      <div className="absolute right-0 top-0 w-[80%] h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #F28C28 0%, transparent 60%)', filter: 'blur(100px)' }}></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #F28C28 0%, transparent 60%)', filter: 'blur(100px)' }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-white drop-shadow-md">
            Delhi&apos;s Leading <br className="hidden lg:block"/>
            <span className="text-[#F28C28] drop-shadow-[0_0_15px_rgba(242,140,40,0.5)]">Political Strategy</span> <br className="hidden lg:block"/>
            & Image Consulting Agency
          </h1>

          <p className="max-w-xl text-lg text-gray-300 mb-8 leading-relaxed font-medium">
            We build powerful political brands, winning narratives, media influence, and digital dominance for leaders, parties, and public figures.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="/contact" className="bg-[#F28C28] text-[#0A0A0A] px-8 py-4 rounded-sm font-black tracking-wide uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(242,140,40,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Start Campaign Strategy
            </a>
            
            <a href="/contact" className="text-white hover:text-[#F28C28] transition-colors border border-white/20 hover:border-[#F28C28]/50 px-8 py-4 rounded-sm font-bold tracking-wide uppercase bg-white/5 backdrop-blur-sm">
              Schedule Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full max-w-xl mx-auto"
        >
          <BeforeAfterImage />
        </motion.div>
      </div>
    </section>
  );
}
