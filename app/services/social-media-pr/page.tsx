import { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, Share2, TrendingUp, Users, Video, Edit3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media PR | Hawk Strategies',
  description: 'Dominate the digital ecosystem with elite social media PR strategies designed for political leaders.',
};

export default function SocialMediaPRPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#1E3A8A] selection:text-white">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA] relative border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 mb-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1E3A8A]">Digital Ecosystem Domination</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-[#0B1A2E]">
            Social Media <br className="hidden md:block"/>
            <span className="text-[#1E3A8A]">War Room</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10">
            Algorithmic domination and viral narrative engineering. We manage political digital campaigns, audience engagement, and social brands across Instagram, Facebook, YouTube, and X.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-black tracking-wide uppercase hover:bg-[#1E3A8A] transition-all shadow-md hover:shadow-lg">
               Deploy Digital Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B1A2E] mb-6">Mastering the <span className="text-[#1E3A8A]">Algorithmic Battlefield</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Elections are won and lost on the screens of smartphones. Hawk Strategies operates specialized Social Media War Rooms that treat digital PR not as an afterthought, but as the primary theater of political engagement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From launching viral hashtags on X (Twitter) to crafting compelling short-form video content for Instagram Reels and YouTube Shorts, our digital strategists ensure your political message achieves maximum organic and paid reach.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Smartphone, title: "Social Branding", desc: "Crafting a unified, powerful political persona online." },
                { icon: TrendingUp, title: "Viral Strategies", desc: "Engineering content designed to break the algorithms." },
                { icon: Share2, title: "Platform Management", desc: "End-to-end operation of Facebook, X, Instagram & YT." },
                { icon: Users, title: "Audience Growth", desc: "Data-driven tactics to expand your digital follower base." }
              ].map((item, i) => (
                <div key={i} className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-lg hover:border-[#1E3A8A]/30 shadow-sm transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#1E3A8A] mb-4" />
                  <h3 className="text-[#0B1A2E] font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow/Process */}
          <div className="mb-24">
             <h2 className="text-3xl font-heading font-bold text-[#0B1A2E] text-center mb-12">Digital <span className="text-[#1E3A8A]">Execution Model</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Content Aggregation", desc: "Sourcing daily updates, speeches, and ground-level political activities." },
                  { step: "02", title: "Studio Production", desc: "High-end editing of video and graphic content optimized for each platform." },
                  { step: "03", title: "War Room Deployment", desc: "Coordinated releasing and boosting of content to hijack trending topics." },
                  { step: "04", title: "Analytics & Adjustment", desc: "Real-time monitoring of engagement metrics to refine future content strategy." }
                ].map((phase, idx) => (
                  <div key={idx} className="relative p-6 border border-gray-100 bg-[#FAFAFA] shadow-sm rounded-md overflow-hidden text-center md:text-left">
                    <div className="text-5xl font-black text-[#1E3A8A]/5 absolute -top-2 right-4">{phase.step}</div>
                    <div className="text-[#1E3A8A] font-bold tracking-widest text-sm mb-4">PHASE {phase.step}</div>
                    <h4 className="text-[#0B1A2E] font-bold text-xl mb-3 relative z-10">{phase.title}</h4>
                    <p className="text-sm text-gray-500 relative z-10">{phase.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="bg-white border border-[#1E3A8A]/10 p-8 md:p-12 rounded-xl text-center shadow-sm">
             <h2 className="text-3xl font-heading font-bold text-[#0B1A2E] mb-6">Dominate the Feed</h2>
             <p className="text-gray-600 max-w-3xl mx-auto mb-8">
               Our digital strategists understand the specific nuances of Indian political social media. We create content that resonates, provokes, and mobilizes.
             </p>
             <Link href="/contact" className="inline-block bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-bold tracking-wide uppercase hover:bg-[#1E3A8A] transition-all shadow-md">
                Start the War Room
             </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
