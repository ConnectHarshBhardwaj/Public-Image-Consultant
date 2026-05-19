import { ContactSection } from "@/components/ContactSection";
import Image from "next/image";
import { Target, Flag, Users, Shield, Award, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative px-4 py-24 lg:py-32 overflow-hidden bg-[#0B1A2E] text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E3A8A]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight mb-8">
            BEYOND <span className="text-[#1E3A8A]">POLITICS.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl leading-relaxed">
            We are a premier national-level political consulting firm,
            engineering perception, influencing behavior, and delivering
            decisive electoral victories across India.
          </p>
        </div>
      </section>

      {/* Agency Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/about1/800/1000"
              alt="Strategy Meeting"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-heading text-[#0B1A2E] mb-6">
              The Hawk Methodology
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Most political campaigns fail because they operate on emotion and
              gut feeling rather than empirical data and psychological strategy.
              At Hawk Strategies, we eliminate the guesswork.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach is rooted in advanced data analytics, hyper-targeted
              digital warfare, and massive ground mobilization. We act as the
              central brain—the War Room—coordinating media narratives,
              candidate perception, and booth-level execution seamlessly.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-[#1E3A8A] pl-4">
                <div className="text-3xl font-black text-[#0B1A2E] mb-1">
                  12+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 font-bold">
                  Successful State Campaigns
                </div>
              </div>
              <div className="border-l-4 border-[#1E3A8A] pl-4">
                <div className="text-3xl font-black text-[#0B1A2E] mb-1">
                  200M+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 font-bold">
                  Voters Reached
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-[#0B1A2E] mb-4">
              Operational Excellence
            </h2>
            <p className="text-lg text-gray-500">
              The principles that dictate our campaign executions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Targeting",
                text: "Propaganda is useless without an audience. We speak directly to swing voters.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Absolute Discretion",
                text: "Confidentiality is our bedrock. Our strategies are executed silently and effectively.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Result Driven",
                text: "We measure success in seats won and margins increased, nothing less.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1E3A8A]/30 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-50 text-[#1E3A8A] rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0B1A2E] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
