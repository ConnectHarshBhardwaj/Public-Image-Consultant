import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-[#0F172A]">
      <h1 className="text-6xl font-black mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/" className="px-6 py-2 bg-[#d4af37] text-[#0F172A] font-bold rounded">
        Return Home
      </Link>
    </div>
  );
}
