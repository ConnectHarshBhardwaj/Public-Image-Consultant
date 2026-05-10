import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media PR | Public Image Consultant',
  description: 'Dominate the digital ecosystem with elite social media PR strategies designed for political leaders.',
};

export default function SocialMediaPRPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Social Media <span className="text-[#D4AF37]">PR</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Algorithmic domination and viral narrative engineering for modern political campaigns.
          </p>
        </div>
      </div>
    </main>
  );
}
