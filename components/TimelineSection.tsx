"use client";
import { motion } from "motion/react";
import { Target, Search, Mic, BarChart, Flag } from "lucide-react";

export function TimelineSection() {
  const steps = [
    {
      icon: <Search />,
      title: "Recon & Intelligence",
      description:
        "Deep vulnerability assessment of the constituency. Constituency mapping, opponent profiling, and booth-wise historical data analytics.",
    },
    {
      icon: <Target />,
      title: "Narrative Engineering",
      description:
        "Developing the core campaign message. What are we promising? Who is the enemy? Creating the polarized narrative that forces voter movement.",
    },
    {
      icon: <Mic />,
      title: "Media Domination",
      description:
        "Simultaneous assault across national TV, regional print, and explosive social media virality to establish atmospheric dominance.",
    },
    {
      icon: <BarChart />,
      title: "Targeted Micro-Campaigning",
      description:
        "Deploying algorithmic digital ads and setting up WhatsApp blast architectures tailored to extremely specific micro-demographics.",
    },
    {
      icon: <Flag />,
      title: "Ground Mobilization & Polling Day",
      description:
        "Activating the karyakarta parallel network. Booth management tools and war room monitoring on the final 48 hours to secure voter turnout.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-[#0B1A2E] mb-4 uppercase tracking-tight">
            The Execution <span className="text-[#1E3A8A]">Timeline</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            How we orchestrate a winning campaign from initial intelligence
            gathering to polling day victory.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 relative items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xl group hover:border-[#1E3A8A] transition-colors relative z-10">
                    <h3 className="text-2xl font-bold font-heading text-[#0B1A2E] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-[#0B1A2E] border-4 border-white rounded-full flex items-center justify-center text-white z-20 shadow-lg">
                  {step.icon}
                </div>

                {/* Empty spacer for alignment on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
