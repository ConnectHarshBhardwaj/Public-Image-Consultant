'use client';
import { motion } from 'motion/react';
import { BeforeAfterImage } from './BeforeAfterImage';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#050B18]">
      {/* Background Visual Overlay */}
      <div className="absolute right-0 top-0 w-[80%] h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 60%)', filter: 'blur(100px)' }}></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #B22222 0%, transparent 60%)', filter: 'blur(100px)' }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
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
