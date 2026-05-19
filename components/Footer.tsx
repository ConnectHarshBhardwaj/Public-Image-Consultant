import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B1A2E] py-16 border-t border-[#1E3A8A]/20 relative z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">
                HAWK<span className="text-[#3B82F6]">STRATEGIES</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 pe-4">
              Delhi’s Premier Political PR & Public Image Consultancy. We build
              massive authority, overwhelming visibility, and unshakeable public
              trust for the nation's top political leaders.
            </p>
            <form className="mb-6 flex gap-2">
              <input
                type="email"
                placeholder="Subscribe to War Room Updates"
                className="bg-white/10 border border-white/20 text-white text-sm rounded-md px-4 py-2 w-full focus:outline-none focus:border-[#3B82F6]"
              />
              <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-md font-bold text-xs uppercase tracking-wider transition-colors">
                Join
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-2">
              Agency
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/campaigns"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/war-room"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Digital War Room
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Intelligence Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-2">
              Core Arsenal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/political-pr"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Political PR & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/services/election-campaign-strategy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Election War Room
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crisis-management"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Crisis Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-management"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Social Media Warfare
                </Link>
              </li>
              <li>
                <Link
                  href="/services/booth-level-strategy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Booth Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#3B82F6] hover:text-white transition-colors text-sm font-bold uppercase mt-2 block tracking-wider"
                >
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-2">
              Headquarters
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-bold mb-1">
                  New Delhi Base
                </span>
                Near Senior Secondary School, Sanoth Village, Ghoga, Narela,
                Delhi, IN 110040
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-bold mb-1">
                  Direct Lines
                </span>
                <a
                  href="tel:+919310868777"
                  className="hover:text-white transition-colors"
                >
                  +91 93108 68777
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-bold mb-1">
                  Secure Comm
                </span>
                <a
                  href="mailto:strategy@hawkstrategies.in"
                  className="hover:text-white transition-colors"
                >
                  strategy@hawkstrategies.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Hawk Strategies Political Consulting.
            All rights reserved. Highly Confidential.
          </p>
          <div className="text-gray-500 text-xs flex flex-wrap justify-center gap-6 font-bold uppercase tracking-widest">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Press
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
