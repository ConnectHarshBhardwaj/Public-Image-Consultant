'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

import { propertiesData } from '@/lib/data';

// Add some dummy images to data since earlier they were removed
const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
];

export function FeaturedProperties({ areaSlug }: { areaSlug?: string }) {
  const properties = areaSlug 
    ? propertiesData.filter(p => p.areaSlug === areaSlug)
    : propertiesData.filter(p => p.featured);
    
  return (
    <section className="py-32 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Exclusive Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-heading text-black font-light leading-tight">
              Featured <br/><span className="italic">Properties</span>
            </h2>
          </div>
          <Link href="/properties" className="text-black hover:text-[#B8860B] transition-colors font-bold uppercase tracking-widest text-xs flex items-center group">
            View All Properties <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {properties.map((property, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={property.id} 
              className="group cursor-pointer"
            >
              <Link href={`/properties/${property.id}`} className="block">
                <div className="relative h-[60vh] md:h-[70vh] mb-6 overflow-hidden">
                  <Image 
                    src={images[index % images.length]} 
                    alt={property.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                      {property.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-heading text-black mb-2 group-hover:text-[#B8860B] transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4" /> {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-light text-black mb-1">{property.price}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{property.area}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
