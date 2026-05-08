'use client';
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const AnimatedCounter = ({ target, duration = 2, suffix = '' }: { target: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smoother animation (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOut * target));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export function CountersSection() {
  const stats = [
    { label: "Campaign Reach", value: 50, suffix: "M+" },
    { label: "Media Features", value: 1500, suffix: "+" },
    { label: "Social Growth", value: 300, suffix: "%" },
    { label: "PR Campaigns", value: 450, suffix: "+" },
    { label: "Digital Engagement", value: 10, suffix: "M+" },
  ];

  return (
    <section className="bg-[#050B18] border-y border-white/5 py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card p-6 ${i % 2 === 0 ? 'political-border' : 'border-l-4 border-[#D4AF37]'}`}
            >
              <div className={`text-3xl lg:text-4xl font-bold mb-1 ${i === 0 ? 'text-[#D4AF37]' : 'text-white'}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
