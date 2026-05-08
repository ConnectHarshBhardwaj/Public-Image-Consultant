'use client';
import { motion } from 'motion/react';

const bannerTexts = [
  "YOUR IMAGE IS YOUR POWER",
  "PUBLIC PERCEPTION DECIDES LEADERSHIP",
  "PR IS THE NEW POLITICAL WEAPON",
  "WE BUILD DIGITAL AUTHORITY",
  "INFLUENCE THE MASSES",
  "STRATEGY • MEDIA • POWER • IMPACT"
];

export function AnimatedBanners() {
  return (
    <div className="w-full bg-[#B22222] py-3 flex overflow-hidden sticky bottom-0 z-40">
      <motion.div
        className="ticker-text text-sm uppercase flex gap-12 px-4 text-white items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {[...bannerTexts, ...bannerTexts].map((text, i) => (
          <div key={i} className="flex gap-12 items-center">
            <span>{text}</span>
            <span className="opacity-70">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
