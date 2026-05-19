'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

import { areasData } from '@/lib/data';

const areaImages = [
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1497369362006-2f08573fc021?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1416331108676-e2a2202ed724?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
];

export function AreaExplorer() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Neighborhoods</span>
          <h2 className="text-5xl md:text-6xl font-heading text-black font-light leading-tight">
            Explore <span className="italic">Narela</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasData.map((area, index) => (
            <Link key={index} href={`/locations/${area.slug}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[50vh] overflow-hidden group cursor-pointer"
              >
                 <Image 
                   src={areaImages[index % areaImages.length]} 
                   alt={area.name} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
                 
                 <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h3 className="text-3xl font-heading mb-2">{area.name}</h3>
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                       <span className="text-white/80 font-light text-sm uppercase tracking-widest">{area.type}</span>
                       <span className="text-white text-xs border border-white px-3 py-1 uppercase tracking-widest">{area.properties} Listings</span>
                    </div>
                 </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
