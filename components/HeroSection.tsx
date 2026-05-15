'use client';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Visual Overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #1E3A8A 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #1E3A8A 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center gap-12 lg:gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 font-heading text-[#0B1A2E]">
            Delhi&apos;s Leading <br className="hidden lg:block"/>
            <span className="text-[#1E3A8A]">Political Strategy</span> <br className="hidden lg:block"/>
            & Image Consulting Agency
          </h1>

          <p className="max-w-xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed font-medium">
            We build powerful political brands, winning narratives, media influence, and digital dominance for leaders, parties, and public figures.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a href="/contact" className="bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-bold tracking-wide hover:bg-[#1E3A8A] transition-all shadow-md hover:shadow-xl">
              Start Campaign Strategy
            </a>
            
            <a href="/contact" className="text-[#0B1A2E] hover:text-[#1E3A8A] transition-colors border border-gray-200 hover:border-gray-400 px-8 py-4 rounded-md font-bold tracking-wide bg-white shadow-sm">
              Schedule Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
