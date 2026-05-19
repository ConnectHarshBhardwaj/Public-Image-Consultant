'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

export function RealEstateHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[95vh] md:h-screen flex flex-col justify-end pb-24 px-4 sm:px-8 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={slides[currentSlide]}
              alt="Luxury Property"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white/80 text-xs font-semibold uppercase tracking-[0.3em] mb-6 block">Invest In Narela</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-[1.1] max-w-4xl"
        >
          Property in Narela, <br/><span className="italic text-white/90">Reimagined.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-12 leading-relaxed"
        >
          Premium residential & commercial properties in Delhi’s fastest growing investment zone. Experience a new standard of luxury living.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link href="/properties" className="bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors text-center">
            Explore Properties
          </Link>
          <Link href="/contact" className="bg-transparent border border-white/50 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center">
            Schedule Visit
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-px transition-all duration-300 ${currentSlide === idx ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
