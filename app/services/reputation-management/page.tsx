import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  Shield,
  Search,
  TrendingUp,
  History,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reputation Management | Hawk Strategies",
  description:
    "Advanced crisis management and political reputation engineering. We protect and elevate your public image.",
};

export default function ReputationManagementPage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#1E3A8A] selection:text-white">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA] relative border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 mb-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1E3A8A]">
              Narrative Control
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-[#0B1A2E]">
            Reputation <br className="hidden md:block" />
            <span className="text-[#1E3A8A]">Management</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10">
            Absolute narrative control. We neutralize defamation, handle
            political crises, and architect an unshakeable digital footprint for
            leaders and public figures.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-black tracking-wide uppercase hover:bg-[#1E3A8A] transition-all shadow-md hover:shadow-lg"
            >
              Secure Your Reputation
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B1A2E] mb-6">
                Guarding Your{" "}
                <span className="text-[#1E3A8A]">Political Capital</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In politics, perception is reality. A single negative narrative
                can erase years of public service. Hawk Strategies offers elite
                reputation management designed for the high-stakes world of
                political consulting.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We utilize aggressive SEO suppression tactics, positive PR
                flooding, and rapid crisis response to protect your online
                identity. Whether you are facing a coordinated media attack or
                seeking to reshape your public brand, we establish total
                dominance over search results and social sentiment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldAlert,
                  title: "Crisis Management",
                  desc: "Rapid response to neutralize political and PR crises.",
                },
                {
                  icon: Search,
                  title: "SEO Suppression",
                  desc: "Pushing negative or false news off page one of Google.",
                },
                {
                  icon: UserCheck,
                  title: "Brand Trust",
                  desc: "Rebuilding credibility within key voter demographics.",
                },
                {
                  icon: Shield,
                  title: "Image Protection",
                  desc: "Proactive defense of your digital and public persona.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-lg hover:border-[#1E3A8A]/30 shadow-sm transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-[#1E3A8A] mb-4" />
                  <h3 className="text-[#0B1A2E] font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow/Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-bold text-[#0B1A2E] text-center mb-12">
              The Reputation <span className="text-[#1E3A8A]">Protocol</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Damage Assessment",
                  desc: "Analyzing the scope of the narrative attack across social and print media.",
                },
                {
                  step: "02",
                  title: "Strategic Suppression",
                  desc: "Deploying counter-narratives and technical SEO to bury negative coverage.",
                },
                {
                  step: "03",
                  title: "Brand Re-Engineering",
                  desc: "Flooding the ecosystem with high-authority, positive political PR.",
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="relative p-6 border border-gray-100 bg-[#FAFAFA] rounded-md text-center shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] font-bold mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-[#0B1A2E] font-bold text-xl mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-gray-500">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#1E3A8A]/10 p-8 md:p-12 rounded-xl text-center shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-[#0B1A2E] mb-6">
              Confidentiality Assured
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Our reputation management operations are conducted with strict
              operational security. We sign comprehensive NDAs with all clients
              to ensure absolute privacy regarding crisis interventions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-bold tracking-wide uppercase hover:bg-[#1E3A8A] transition-all shadow-md"
            >
              Initiate Defense Protocol
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
