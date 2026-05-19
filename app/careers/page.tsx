import { ContactSection } from "@/components/ContactSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      title: "Political Data Analyst",
      type: "Full-Time",
      location: "New Delhi",
      department: "War Room",
    },
    {
      title: "Senior PR Strategist",
      type: "Full-Time",
      location: "New Delhi",
      department: "Media & Relations",
    },
    {
      title: "Video Editor & Content Producer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      department: "Content Studio",
    },
    {
      title: "Election Strategy Intern",
      type: "Internship (6 Months)",
      location: "New Delhi",
      department: "Field Ops",
    },
  ];

  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      <section className="bg-[#0B1A2E] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 uppercase tracking-tight">
            Join The <span className="text-[#1E3A8A]">War Room</span>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            We don’t just hire talent; we recruit strategists. If you understand
            the pulse of the Indian voter, digital warfare, and extreme
            high-pressure environments, you belong here.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold font-heading text-[#0B1A2E] mb-10">
          Open Positions
        </h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg hover:border-[#1E3A8A] transition-all cursor-pointer group"
            >
              <div>
                <div className="flex gap-3 items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-2 py-1 rounded">
                    {job.department}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0B1A2E] group-hover:text-[#1E3A8A] transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-500 mt-2 flex items-center gap-2">
                  Location: {job.location}
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="flex items-center text-[#1E3A8A] font-bold text-sm uppercase tracking-wider group-hover:bg-[#1E3A8A] group-hover:text-white px-6 py-3 rounded-md border border-[#1E3A8A] transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
