import { ContactSection } from "@/components/ContactSection";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CampaignsPage() {
  const campaigns = [
    {
      title: "Assembly Elections 2023",
      category: "Full State Strategy",
      metrics: "Won 114/200 Seats",
      image: "https://picsum.photos/seed/campaign1/800/600",
      description:
        "End-to-end management of a high-stakes central Indian state election, focusing on hyper-local digital outreach and massive ground rallies.",
    },
    {
      title: "National PR Reformation",
      category: "Reputation Management",
      metrics: "140% Positive Sentiment",
      image: "https://picsum.photos/seed/campaign2/800/600",
      description:
        "A complete overhaul of a senior leader's image following a controversy, utilizing national television and aggressive digital PR.",
    },
    {
      title: "Municipal Corporation Takeover",
      category: "Urban Dominance",
      metrics: "Historic Majority",
      image: "https://picsum.photos/seed/campaign3/800/600",
      description:
        "Data-driven targeting of urban elite and middle-class demographics to secure a historic win in a major metropolitan MCD.",
    },
    {
      title: "Digital Youth Outreach",
      category: "Social Media Campaign",
      metrics: "50M+ Impressions",
      image: "https://picsum.photos/seed/campaign4/800/600",
      description:
        "Activating first-time voters through culturally relevant meme warfare, influencer collaborations, and dynamic YouTube video series.",
    },
  ];

  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-black font-heading text-[#0B1A2E] mb-6 uppercase tracking-tight">
          Our <span className="text-[#1E3A8A]">Battlegrounds</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We deal in results. Explore some of our most impactful political
          campaigns, PR turnarounds, and digital dominance strategies across
          India.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {campaigns.map((campaign, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0B1A2E] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {campaign.category}
                </div>
              </div>
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-4">
                  {campaign.metrics}
                </div>
                <h3 className="text-3xl font-bold font-heading text-[#0B1A2E] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {campaign.description}
                </p>
                <div className="flex items-center text-[#1E3A8A] font-bold text-sm uppercase tracking-wider">
                  Read Case Study{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
