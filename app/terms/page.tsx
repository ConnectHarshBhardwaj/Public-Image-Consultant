import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Public Image Consultant',
  description: 'Terms of service and operational agreements for Public Image Consultant.',
};

export default function TermsPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#050B18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-black text-white font-heading mb-10 tracking-tight">
            Terms & <span className="text-[#D4AF37]">Conditions</span>
          </h1>
          <div className="prose prose-invert prose-p:text-gray-400 max-w-none">
            <p>By engaging with Public Image Consultant, you agree to our strategic operational guidelines designed to ensure mutual success and absolute operational integrity.</p>
            <h2 className="text-[#D4AF37] mt-8">Operational Integrity</h2>
            <p>We execute PR architectures with extreme prejudice towards achieving election goals, operating strictly within ethical and legal boundaries of Indian campaign law.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
