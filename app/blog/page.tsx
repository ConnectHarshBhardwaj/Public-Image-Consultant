import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      category: "Election Strategy",
      title: "Why Traditional Rallies Are Losing Impact in 2024",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      author: "Strategy Desk",
    },
    {
      category: "Digital Warfare",
      title: "The Anatomy of a Viral Political Campaign",
      date: "Oct 28, 2023",
      readTime: "8 min read",
      author: "Media Team",
    },
    {
      category: "Public Relations",
      title: "Damage Control: Navigating A Crisis in 24 Hours",
      date: "Sep 15, 2023",
      readTime: "6 min read",
      author: "PR Division",
    },
    {
      category: "Branding",
      title: "Crafting the Statesman: Visual Identity in Politics",
      date: "Aug 02, 2023",
      readTime: "7 min read",
      author: "Brand Studio",
    },
  ];

  return (
    <main className="w-full relative selection:bg-[#1E3A8A] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black font-heading text-[#0B1A2E] mb-4 uppercase tracking-tight">
            Intelligence <span className="text-[#1E3A8A]">Briefings</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Insights, methodology, and analysis from our war room to your desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-white p-8 border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  &bull;
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B1A2E] mb-4 group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-500">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700">
                      {post.author}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
