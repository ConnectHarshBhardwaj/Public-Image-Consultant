import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Coverage | Public Image Consultant',
  description: 'Premium media syndication and strategic local news coverage for political leaders in Delhi.',
};

export default function MediaCoveragePage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Media <span className="text-[#D4AF37]">Coverage</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Exclusive syndication across regional and national media channels to control the narrative.
          </p>
        </div>
      </div>
    </main>
  );
}
