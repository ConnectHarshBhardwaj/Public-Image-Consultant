'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Visual Overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #1E3A8A 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #1E3A8A 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

      <div className="relative z-10 w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-left lg:-ml-2"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-[#0B1A2E]">
            Delhi&apos;s Leading <br className="hidden lg:block"/>
            <span className="text-[#1E3A8A]">PR Agency in Narela</span> <br className="hidden lg:block"/>
            & Political Strategy Firm
          </h1>

          <p className="max-w-xl text-lg text-gray-600 mb-10 leading-relaxed font-medium">
            Based in Narela, Hawk Strategies builds powerful political brands, winning narratives, media influence, and digital dominance for leaders, parties, and public figures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="/contact" className="bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-bold tracking-wide hover:bg-[#1E3A8A] transition-all shadow-md hover:shadow-xl w-full sm:w-auto text-center">
              Start Campaign Strategy
            </a>
            
            <a href="/contact" className="text-[#0B1A2E] hover:text-[#1E3A8A] transition-colors border border-gray-200 hover:border-gray-400 px-8 py-4 rounded-md font-bold tracking-wide bg-white shadow-sm w-full sm:w-auto text-center">
              Schedule Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden lg:ml-4"
        >
          <div className="absolute inset-0 bg-[#1E3A8A]/5 mix-blend-multiply z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          
          <Image
            src="/gandhi-new.jpg"
            alt="Mahatma Gandhi Portrait"
            fill
            className="object-cover object-top mix-blend-multiply grayscale contrast-125 brightness-105"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
