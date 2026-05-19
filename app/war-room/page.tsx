import { ContactSection } from "@/components/ContactSection";
import { Target, Search, BarChart, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function WarRoomPage() {
  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-20 min-h-screen bg-black">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
        <Image
          src="https://picsum.photos/seed/warroom/1920/1080"
          alt="War Room"
          fill
          className="object-cover opacity-40 grayscale blur-sm scale-105"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>{" "}
            Restricted Access
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-heading text-white uppercase tracking-tighter mb-6 shadow-2xl">
            DIGITAL <span className="text-red-600">WAR ROOM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            The nerve center of election strategy. Real-time data processing,
            narrative tracking, and rapid response deployment.
          </p>
        </div>
      </section>

      {/* Analytics Dashboard Feel Section */}
      <section className="py-24 relative z-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl rounded-full" />
              <Zap className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Live Monitoring
              </h3>
              <p className="text-sm text-gray-400">
                Tracking over 50,000+ data points per hour during peak election
                phases.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
              <BarChart className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Sentiment Analysis
              </h3>
              <p className="text-sm text-gray-400">
                AI-driven mapping of voter emotions across Facebook and Twitter.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 bg-gray-900 border border-gray-800 p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-4">
              <h3 className="text-xl font-bold font-heading text-white uppercase tracking-widest flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" /> Command Matrix
              </h3>
              <span className="text-xs text-gray-500 font-mono">
                STATUS: HIGH ALERT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-black font-mono text-white mb-2">
                  24/7
                </div>
                <div className="text-xs uppercase tracking-widest text-red-500 font-bold">
                  Operation Cycle
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Continuously functioning shifts monitoring news cycles across
                  the entire nation.
                </p>
              </div>
              <div>
                <div className="text-5xl font-black font-mono text-white mb-2">
                  800<span className="text-blue-500">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-blue-500 font-bold">
                  Narratives Defeated
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Fake news and opposition propaganda identified and neutralized
                  before virality.
                </p>
              </div>
              <div>
                <div className="text-5xl font-black font-mono text-white mb-2">
                  99<span className="text-green-500">%</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-green-500 font-bold">
                  Targeting Accuracy
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Precision digital ad delivery reaching swing voters in
                  specific booths.
                </p>
              </div>
            </div>

            <div className="mt-12 p-4 bg-black/50 border border-gray-800 rounded-lg">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span>SYSTEM_DIAGNOSTICS: NOMINAL</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                  CONNECTION SECURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
