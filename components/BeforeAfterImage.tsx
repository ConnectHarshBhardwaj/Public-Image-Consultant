'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function BeforeAfterImage() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-ew-resize select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Container background (After image - Happy Politician) */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=800"
          alt="Happy, confident politician"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          referrerPolicy="no-referrer"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-[#25D366]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full z-10 shadow-lg">
          After PIC Strategy
        </div>
      </div>

      {/* Clipped overlay (Before image - Sad/Stressed Politician) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?auto=format&fit=crop&q=80&w=800"
          alt="Stressed politician before"
          fill
          className="object-cover filter grayscale contrast-125 brightness-75"
          sizes="(max-width: 1024px) 100vw, 50vw"
          referrerPolicy="no-referrer"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-[#B22222]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap z-10">
          Before Agency
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] cursor-ew-resize shadow-[0_0_15px_rgba(212,175,55,0.5)] z-20"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#050B18] border-2 border-[#D4AF37] rounded-full flex items-center justify-center shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 -ml-2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
      
      {/* Instruction overlay */}
      {!isDragging && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white/80 text-xs font-medium tracking-wide flex items-center gap-2 z-10 pointer-events-none"
        >
          <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Drag to compare the outcome
        </motion.div>
      )}
    </div>
  );
}
