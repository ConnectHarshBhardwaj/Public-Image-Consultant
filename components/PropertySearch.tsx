'use client';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export function PropertySearch() {
  return (
    <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100"
      >
        <form className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Requirement</label>
            <select className="w-full bg-gray-50 border border-gray-200 text-black rounded-md px-4 py-3 focus:outline-none focus:border-[#B8860B] transition-colors text-sm">
              <option>Buy</option>
              <option>Rent</option>
              <option>Invest</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Property Type</label>
            <select className="w-full bg-gray-50 border border-gray-200 text-black rounded-md px-4 py-3 focus:outline-none focus:border-[#B8860B] transition-colors text-sm">
              <option>Residential</option>
              <option>Commercial Space</option>
              <option>Industrial Plot</option>
              <option>Builder Floor</option>
              <option>Luxury Villa</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Location</label>
            <select className="w-full bg-gray-50 border border-gray-200 text-black rounded-md px-4 py-3 focus:outline-none focus:border-[#B8860B] transition-colors text-sm">
              <option>All Narela Areas</option>
              <option>Sector A1</option>
              <option>Sector B2</option>
              <option>Narela Industrial Area</option>
              <option>Swatantra Nagar</option>
              <option>Alipur</option>
            </select>
          </div>
          
          <div className="flex-1 flex items-end">
            <button className="w-full bg-black hover:bg-[#B8860B] text-white font-bold uppercase tracking-[0.2em] py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 text-xs h-[46px]">
              <Search className="w-4 h-4" /> Find
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
