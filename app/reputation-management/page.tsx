import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reputation Management | Hawk Strategies',
  description: 'Advanced crisis management and political reputation engineering. We protect and elevate your public image.',
};

export default function ReputationManagementPage() {
  return (
    <main className="w-full relative pt-20 min-h-screen">
      <div className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 tracking-tight">
            Reputation <span className="text-[#F28C28]">Management</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Absolute narrative control. We neutralize defamation and architect an unshakeable digital footprint.
          </p>
        </div>
      </div>
    </main>
  );
}
