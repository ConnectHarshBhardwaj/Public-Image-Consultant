import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import {
  Shield,
  Target,
  Users,
  Map,
  Clock,
  ArrowRight,
  Zap,
  Flag,
  Monitor,
  BarChart,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function ServicesIndex() {
  const services = [
    {
      id: "political-pr",
      icon: <Globe className="w-8 h-8" />,
      title: "Political PR & Media Management",
      description:
        "Total control over mass narrative. We deal with top national media channels to ensure your story is told exactly how you want it.",
    },
    {
      id: "election-campaign-strategy",
      icon: <Flag className="w-8 h-8" />,
      title: "Election Campaign Strategy",
      description:
        "End-to-end election war room management. We handle candidate positioning, demographic targeting, volunteer mobilization, and speechwriting.",
    },
    {
      id: "social-media-management",
      icon: <Monitor className="w-8 h-8" />,
      title: "Digital Dominance",
      description:
        "Taking over Facebook, X, Instagram, and YouTube. Organic viral reach strategies and high-budget political ad deployments.",
    },
    {
      id: "crisis-management",
      icon: <Shield className="w-8 h-8" />,
      title: "Crisis Management",
      description:
        "Rapid-response damage control to protect the candidate's image against opposition attacks, fake news, and controversies.",
    },
    {
      id: "reputation-management",
      icon: <Users className="w-8 h-8" />,
      title: "Leader Image Building",
      description:
        "Curating the public persona of political leaders from scratch. Styling, communication coaching, and strategic appearances.",
    },
    {
      id: "digital-advertising",
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Advertising",
      description:
        "Deploying sophisticated programmatic advertising across digital platforms to sway swing voters in critical constituencies.",
    },
    {
      id: "booth-level-strategy",
      icon: <Map className="w-8 h-8" />,
      title: "Booth Management & Surveys",
      description:
        "Ground-level actionable data gathering. Opinion polls, sentiment analysis, and booth karyakarta coordination tools.",
    },
    {
      id: "whatsapp-campaigning",
      icon: <Zap className="w-8 h-8" />,
      title: "WhatsApp Operations",
      description:
        "Segmented hyper-local blast messaging. Direct-to-voter communication at scale avoiding standard filters.",
    },
  ];

  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-24 min-h-screen">
      <section className="bg-[#0B1A2E] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 uppercase tracking-tight">
            Our <span className="text-[#1E3A8A] text-shadow-sm">Arsenal</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed font-light">
            We operate at the intersection of traditional political strategy and
            modern digital warfare. Hawk Strategies provides the comprehensive
            toolkit required to win.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#F3F4F6] text-[#1E3A8A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0B1A2E] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-[#1E3A8A] font-bold text-sm uppercase tracking-wider group-hover:text-[#0B1A2E] transition-colors"
                >
                  Explore Service{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
