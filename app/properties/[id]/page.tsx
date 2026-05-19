'use client';
import { useParams } from 'next/navigation';
import { MapPin, BedDouble, Bath, Maximize, Check, PhoneCall, ArrowRight, View, Table, Map } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const galleryImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params.id;
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <main className="w-full relative selection:bg-[#B8860B] selection:text-white pt-24 min-h-screen bg-white">
      
      {/* Fullscreen Gallery Hero */}
      <section className="relative w-full h-[85vh] bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image 
              src={galleryImages[currentImage]}
              alt="Property Gallery"
              fill
              className="object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gallery Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {galleryImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-12 h-1 transition-all duration-500 ${currentImage === idx ? 'bg-[#B8860B]' : 'bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
        
        <div className="absolute top-8 left-8 z-20">
          <Link href="/properties" className="text-white hover:text-[#B8860B] transition-colors text-[10px] font-bold uppercase tracking-[0.2em] flex items-center bg-black/40 backdrop-blur-md px-6 py-3">
            &larr; Back to Portfolio
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Main Details */}
          <div className="lg:col-span-8">
            <div className="mb-20">
              <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-[10px] mb-4 block">Exclusive Listing</span>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-6">
                 <h1 className="text-5xl md:text-6xl font-light font-heading text-black leading-tight">
                   The Narela <br/><span className="italic text-gray-500">Estate</span>
                 </h1>
                 <div className="text-3xl font-light text-black">₹ 2.45 Cr</div>
              </div>
              <p className="text-gray-500 flex items-center gap-2 text-sm uppercase tracking-widest font-medium">
                <MapPin className="text-[#B8860B] w-4 h-4"/> Sector A1, Premium Block, Narela
              </p>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-gray-200 py-12">
               <div className="flex flex-col gap-2 text-black">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Bedrooms</span>
                  <div className="flex items-center gap-3">
                     <BedDouble className="w-5 h-5 text-[#B8860B]" />
                     <span className="text-2xl font-light">4</span>
                  </div>
               </div>
               <div className="flex flex-col gap-2 text-black border-l border-gray-100 pl-8">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Bathrooms</span>
                  <div className="flex items-center gap-3">
                     <Bath className="w-5 h-5 text-[#B8860B]" />
                     <span className="text-2xl font-light">4</span>
                  </div>
               </div>
               <div className="flex flex-col gap-2 text-black border-l border-gray-100 pl-8">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Area</span>
                  <div className="flex items-center gap-3">
                     <Maximize className="w-5 h-5 text-[#B8860B]" />
                     <span className="text-2xl font-light">2,500 <span className="text-sm">sq.ft</span></span>
                  </div>
               </div>
               <div className="flex flex-col gap-2 text-black border-l border-gray-100 pl-8">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Status</span>
                  <div className="flex items-center gap-3">
                     <View className="w-5 h-5 text-[#B8860B]" />
                     <span className="text-lg font-light">Ready Move</span>
                  </div>
               </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-heading text-black mb-8 italic">The Residence</h2>
              <p className="text-gray-600 leading-loose max-w-3xl mb-8 font-light text-lg">
                Experience unparalleled luxury in this masterfully crafted villa located in the heart of Narela&apos;s most sought-after Sector A1. Designed for modern living, this property features expansive open-plan living areas, floor-to-ceiling windows, and premium bespoke finishes throughout.
              </p>
              <p className="text-gray-600 leading-loose max-w-3xl font-light text-lg">
                The gourmet kitchen boasts state-of-the-art appliances, while the master suite offers a sanctuary of relaxation with its spa-like ensuite and private balcony overlooking landscaped gardens. Ideal for discerning families seeking elegance and comfort in a prime location.
              </p>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-heading text-black mb-10 italic">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                {['Smart Home Automation', 'Bespoke Italian Kitchen', 'Private Landscaped Garden', '2 Car Underground Parking', 'Italian Marble Flooring', 'High-speed Elevator', 'Vastu Compliant Design', '24/7 Concierge Security', 'Club House Access'].map((amenity, i) => (
                  <div key={i} className="flex items-start gap-4 text-gray-700">
                     <Check className="w-4 h-4 text-[#B8860B] mt-1" />
                     <span className="font-light text-sm leading-relaxed">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-3xl font-heading text-black mb-10 italic">Location & Neighborhood</h2>
              <div className="w-full h-96 bg-gray-100 flex flex-col items-center justify-center border border-gray-200">
                <Map className="w-10 h-10 text-gray-300 mb-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Map Integration Coordinates</span>
              </div>
            </div>
          </div>

          {/* Sticky Inquiry Form Sidebar */}
          <div className="lg:col-span-4">
             <div className="bg-white p-10 border border-gray-200 shadow-[0_30px_60px_rgba(0,0,0,0.05)] sticky top-32">
                <div className="text-center mb-10 border-b border-gray-100 pb-8">
                  <span className="text-[#B8860B] font-semibold uppercase tracking-[0.2em] text-[10px] mb-4 block">Private Showing</span>
                  <h3 className="text-3xl font-heading text-black mb-4">Register Interest</h3>
                  <p className="text-gray-500 text-sm font-light">Schedule a VIP viewing of this luxury estate.</p>
                </div>
                
                <form className="space-y-6 mb-10">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-200 text-black py-2 focus:outline-none focus:border-[#B8860B] transition-colors" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Phone</label>
                    <input type="tel" className="w-full bg-transparent border-b border-gray-200 text-black py-2 focus:outline-none focus:border-[#B8860B] transition-colors" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-gray-200 text-black py-2 focus:outline-none focus:border-[#B8860B] transition-colors" />
                  </div>
                  
                  <div className="pt-4">
                    <button type="button" className="w-full bg-black hover:bg-[#B8860B] text-white font-bold uppercase tracking-[0.2em] text-[10px] py-5 transition-colors flex justify-center items-center gap-2">
                      Schedule Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
                
                <div className="pt-8 border-t border-gray-100 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-6">Or Contact Directly</p>
                  <a href="https://wa.me/919310868777?text=I am interested in The Narela Estate" target="_blank" className="w-full bg-transparent text-black border border-gray-200 hover:border-black font-bold uppercase tracking-widest text-[10px] py-4 flex justify-center items-center gap-3 transition-all mb-4">
                    WhatsApp Inquiry
                  </a>
                  <a href="tel:+919310868777" className="w-full bg-transparent text-black border border-gray-200 hover:border-black font-bold uppercase tracking-widest text-[10px] py-4 flex justify-center items-center gap-3 transition-all">
                    <PhoneCall className="w-3 h-3 text-black" /> +91 93108 68777
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
