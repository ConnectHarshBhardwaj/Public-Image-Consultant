import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hawk Strategies',
  description: 'Privacy policy and data protection guidelines for Hawk Strategies clients and operatives.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-black text-[#0B1A2E] font-heading mb-10 tracking-tight">
            Privacy <span className="text-[#1E3A8A]">Policy</span>
          </h1>
          <div className="prose prose-p:text-gray-600 max-w-none">
            <p>At Hawk Strategies, operational secrecy and client confidentiality are our foundational tenets. This Privacy Policy details how we handle information acquired during our strategic engagements.</p>
            <h2 className="text-[#1E3A8A] mt-8 font-bold text-2xl mb-4">Confidentiality of Political Data</h2>
            <p>All polling data, sentiment analyses, and internal communications shared with our agency are sealed beneath strict Non-Disclosure Agreements. We never syndicate strategic information.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
