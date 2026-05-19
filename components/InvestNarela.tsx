'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Train, Building, TrendingUp } from 'lucide-react';

export function InvestNarela() {
  return (
    <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Strategic Growth Corridor</span>
            <h2 className="text-5xl md:text-6xl font-heading text-black font-light leading-tight mb-8">
              Why Invest In <br/><span className="italic">Narela?</span>
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-12">
              Narela is Delhi&apos;s fastest emerging smart sub-city. With mega infrastructure projects, upcoming metro connectivity, and massive commercial setups, real estate in Narela offers the highest appreciation potential in the National Capital Region.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Train className="text-[#B8860B] w-5 h-5 flex-shrink-0" />, title: "Upcoming Metro Phase IV", desc: "Direct connectivity to central Delhi." },
                { icon: <Building className="text-[#B8860B] w-5 h-5 flex-shrink-0" />, title: "DDA Smart City Developments", desc: "Massive residential & commercial hubs underway." },
                { icon: <TrendingUp className="text-[#B8860B] w-5 h-5 flex-shrink-0" />, title: "High ROI & Ground Appreciation", desc: "Property values rising at 15-20% YoY." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-black font-semibold text-lg tracking-wide mb-1">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <a href="/why-invest" className="text-black font-bold uppercase tracking-widest text-xs border-b border-black pb-1 hover:text-[#B8860B] hover:border-[#B8860B] transition-colors">Read Full Investment Report</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[80vh] w-full"
          >
            <Image 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Narela Infrastructure" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-black p-8 md:p-12 z-20 shadow-2xl max-w-sm">
              <div className="text-6xl font-heading text-white mb-2">15<span className="text-[#B8860B]">%</span></div>
              <div className="text-gray-400 font-medium text-xs uppercase tracking-[0.2em] leading-relaxed">
                Avg. Yearly Appreciation across prime sectors in Narela
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
