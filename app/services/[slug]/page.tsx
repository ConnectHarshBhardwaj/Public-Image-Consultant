import { notFound } from "next/navigation";
import { ContactSection } from "@/components/ContactSection";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const servicesData: Record<string, any> = {
    "political-pr": {
      title: "Political PR & Media Management",
      subtitle: "Control The National Narrative",
      description:
        "In today’s hyper-connected environment, public perception is fragile. We ensure your political brand remains resilient, powerful, and positively framed across all major news networks and regional media outlets.",
      deliverables: [
        "National & Regional TV Coverage",
        "Print Media Features",
        "Press Release Distribution",
        "Opinion Editorial Placements",
        "Journalist Relationship Management",
      ],
    },
    "election-campaign-strategy": {
      title: "Election Campaign Strategy",
      subtitle: "Scientifically Engineered Election Victories",
      description:
        "We don’t believe in guesswork. Our campaign strategy relies on hard data, behavioral psychology, and aggressive on-ground execution. We act as the central brain—the War Room—for your entire campaign.",
      deliverables: [
        "Micro-Level Constituency Mapping",
        "Opponent Vulnerability Analysis",
        "Campaign Manifesto & Messaging",
        "Rally & Ground Event Optimization",
        "Voter Mobilization Tactics",
      ],
    },
    "social-media-management": {
      title: "Social Media Management & Digital Dominance",
      subtitle: "Command the Digital Battlefield",
      description:
        "Social media makes or breaks political careers today. We curate your digital presence across Meta, X, and YouTube to maximize organic virality, counter misinformation, and establish digital supremacy.",
      deliverables: [
        "Platform Management (X, FB, Insta, YT)",
        "Viral Content & Meme Generation",
        "Trend Hijacking",
        "Live Event Broadcasting",
        "Sentiment & Troll Management",
      ],
    },
    "crisis-management": {
      title: "Crisis Management",
      subtitle: "Immediate Damage Control",
      description:
        "When controversies strike, minutes matter. Our 24/7 crisis response team deploys instantly to contain damage, reshape the narrative, and counter opposition attacks with strategic deflection and fact-checking.",
      deliverables: [
        "24/7 War Room Activation",
        "Rapid Response Content",
        "Negative SEO Suppression",
        "Definitive Truth Narratives",
        "Legal & PR Defensive Maneuvers",
      ],
    },
    "reputation-management": {
      title: "Leader Image Building",
      subtitle: "Crafting the Statesman Persona",
      description:
        "A leader is seen before they are heard. From wardrobe styling and body language to speech cadence and policy focus, we shape an aura of authority and trustworthiness that appeals directly to the electorate.",
      deliverables: [
        "Visual Identity & Grooming",
        "Speechwriting & Coaching",
        "Strategic Interviews",
        "Philanthropic Alignment",
        "Long-term Legacy Planning",
      ],
    },
    "digital-advertising": {
      title: "Targeted Digital Advertising",
      subtitle: "Precision Voter Targeting",
      description:
        "We deploy multi-million rupee ad budgets efficiently. Using advanced programmatic tools, we ensure your message directly reaches swing voters based on their demographics, online behavior, and precise geolocation.",
      deliverables: [
        "Facebook & Google Ads Management",
        "Programmatic Display & Video",
        "Geofencing Campaigns",
        "A/B Tested Creatives",
        "Conversion & ROI Tracking",
      ],
    },
    "booth-level-strategy": {
      title: "Booth Management & Surveys",
      subtitle: "Data-Driven Ground Reality",
      description:
        "Elections are won at the booth level. We provide the technology and organizational frameworks required to manage thousands of karyakartas, ensuring maximum voter turnout on polling day.",
      deliverables: [
        "Panna Pramukh Apps",
        "Pre-Poll Sentiment Surveys",
        "Exit Poll Analysis",
        "Voter Slip Distribution Tech",
        "Live Polling Day Control Room",
      ],
    },
  };

  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="bg-[#0B1A2E] text-white py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-[#1E3A8A] font-bold tracking-wide uppercase">
            {service.subtitle}
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-heading text-[#0B1A2E] mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl">
            <h2 className="text-2xl font-bold font-heading text-[#0B1A2E] mb-6">
              Core Deliverables
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.deliverables.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#1E3A8A] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
