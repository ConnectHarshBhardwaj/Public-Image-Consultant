import { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, Tv, Mic, Globe, Briefcase, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media Coverage | Hawk Strategies',
  description: 'Premium media syndication and strategic local news coverage for political leaders in Delhi.',
};

export default function MediaCoveragePage() {
  return (
    <main className="w-full relative pt-20 selection:bg-[#1E3A8A] selection:text-white">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA] relative border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 mb-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1E3A8A]">Media Syndication</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 font-heading text-[#0B1A2E]">
            Media <br className="hidden md:block"/>
            <span className="text-[#1E3A8A]">Coverage</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10">
            Exclusive syndication across regional and national media channels to control the narrative. We secure strategic press coverage, manage TV interviews, and enhance brand visibility for political and public figures.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact" className="bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-black tracking-wide uppercase hover:bg-[#1E3A8A] transition-all shadow-md hover:shadow-lg">
               Plan Your Media Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B1A2E] mb-6">Controlling the <span className="text-[#1E3A8A]">News Cycle</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Positive media visibility is not an accident; it is engineered. Hawk Strategies maintains an extensive network of relationships with journalists, editors, and producers across print, digital, and broadcast media.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don't just secure coverage; we shape the angle of the story. Whether you need strategic press release distribution, placements in leading national dailies, or prime-time TV visibility, our Media PR team ensures your message reaches the masses with authority.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Newspaper, title: "Print Media", desc: "Placements in major national and regional newspapers." },
                { icon: Tv, title: "Broadcast TV", desc: "Securing prime-time coverage and panel appearances." },
                { icon: Globe, title: "Digital News", desc: "Syndication across high-authority digital news portals." },
                { icon: Mic, title: "Interview Prep", desc: "Media training and debate preparation for leaders." }
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
             <h2 className="text-3xl font-heading font-bold text-[#0B1A2E] text-center mb-12">Our Syndication <span className="text-[#1E3A8A]">Network</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Narrative Drafting", desc: "Writing compelling press releases and statement drafts tailored to journalistic standards." },
                  { step: "02", title: "Targeted Pitching", desc: "Leveraging our media network to push stories to relevant reporters and editors." },
                  { step: "03", title: "Coverage Tracking", desc: "Monitoring the news cycle and compiling detailed PR impact reports for your campaign." }
                ].map((phase, idx) => (
                  <div key={idx} className="relative p-6 border border-gray-100 bg-[#FAFAFA] rounded-md text-center shadow-sm">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] font-bold mb-4">{phase.step}</div>
                    <h4 className="text-[#0B1A2E] font-bold text-xl mb-3">{phase.title}</h4>
                    <p className="text-sm text-gray-500">{phase.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="bg-white border border-[#1E3A8A]/10 p-8 md:p-12 rounded-xl text-center shadow-sm">
             <h2 className="text-3xl font-heading font-bold text-[#0B1A2E] mb-6">Amplify Your Voice</h2>
             <p className="text-gray-600 max-w-3xl mx-auto mb-8">
               Establish undeniable credibility through strategic news placements. We connect leaders directly to the media platforms that matter most.
             </p>
             <Link href="/contact" className="inline-block bg-[#0B1A2E] text-white px-8 py-4 rounded-md font-bold tracking-wide uppercase hover:bg-[#1E3A8A] transition-all shadow-md">
                Connect With Us
             </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
