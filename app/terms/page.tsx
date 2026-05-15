import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hawk Strategies',
  description: 'Terms of service and operational agreements for Hawk Strategies.',
};

export default function TermsPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-black text-[#0B1A2E] font-heading mb-10 tracking-tight">
            Terms & <span className="text-[#1E3A8A]">Conditions</span>
          </h1>
          <div className="prose prose-p:text-gray-600 max-w-none">
            <p>By engaging with Hawk Strategies, you agree to our strategic operational guidelines designed to ensure mutual success and absolute operational integrity.</p>
            <h2 className="text-[#1E3A8A] mt-8 font-bold text-2xl mb-4">Operational Integrity</h2>
            <p>We execute PR architectures with extreme prejudice towards achieving election goals, operating strictly within ethical and legal boundaries of Indian campaign law.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
