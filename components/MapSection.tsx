"use client";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function MapSection() {
  const regions = [
    { name: "Delhi NCR", type: "Headquarters & Primary Ops" },
    { name: "Uttar Pradesh", type: "Active War Rooms" },
    { name: "Haryana", type: "Active War Rooms" },
    { name: "Madhya Pradesh", type: "Campaign Execution" },
    { name: "Rajasthan", type: "Campaign Execution" },
  ];

  return (
    <section className="py-24 bg-[#0B1A2E] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 uppercase tracking-tight">
            Our Operational{" "}
            <span className="text-[#1E3A8A] text-shadow-sm">Footprint</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Operating massive war rooms and ground teams across the Hindi
            heartland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl flex items-center justify-center group">
            {/* Abstract Map Representation instead of actual image map since we don't have a specific India map image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-[#0B1A2E]"></div>

            {/* Animated pulsing markers to simulate map coverage */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-[30%] left-[45%] w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
              className="absolute top-[40%] left-[55%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 1 }}
              className="absolute top-[35%] left-[35%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.8, delay: 1.5 }}
              className="absolute top-[50%] left-[40%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            ></motion.div>

            <div className="z-10 text-center">
              <span className="font-mono text-gray-500 tracking-widest text-xs">
                NORTH_INDIA_GRID_ACTIVE
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {regions.map((region, i) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${i === 0 ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"}`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading">
                    {region.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-mono tracking-widest">
                    {region.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
