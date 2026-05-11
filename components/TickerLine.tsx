'use client';
import { motion } from 'motion/react';

export function TickerLine() {
  const tickerItems = [
    "Delhi’s Next Generation Political PR Agency",
    "•",
    "Building Powerful Public Images",
    "•",
    "Managing Leaders, Influencers & Political Campaigns",
    "•",
    "Your Reputation is Your Power",
    "•",
    "Digital Influence. Political Authority.",
    "•",
    "Strategic PR for Public Leaders",
    "•",
    "Shaping Public Perception Across Delhi",
    "•",
    "Where Politics Meets Media Strategy",
    "•",
  ];

  // Repeat items to ensure seamless scroll
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#F28C28] text-[#0A0A0A] py-2 flex overflow-hidden border-b border-black/20 relative z-10">
      <motion.div
        className="flex gap-12 px-4 items-center"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className={`ticker-text text-xs uppercase ${
              item === '•' ? 'opacity-50' : ''
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
