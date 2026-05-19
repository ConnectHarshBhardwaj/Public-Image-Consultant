import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                Invest In <span className="italic font-light">Narela</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8 pe-4">
              Your premier luxury property consultant in Narela, Delhi. Curating the finest residential and commercial spaces.
            </p>
            <a href="tel:+919310868777" className="text-white hover:text-[#B8860B] transition-colors border-b border-white/20 hover:border-[#B8860B] pb-1 text-sm tracking-wider uppercase font-medium">
              Call Us: +91 93108 68777
            </a>
          </div>

          <div className="lg:col-span-1 border-l border-white/5 pl-4 md:pl-8">
            <h4 className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Property Portfolio</h4>
            <ul className="space-y-4">
              <li><Link href="/properties/luxury" className="text-white/50 hover:text-white transition-colors text-sm font-light">Luxury Homes</Link></li>
              <li><Link href="/properties/builder-floors" className="text-white/50 hover:text-white transition-colors text-sm font-light">Builder Floors</Link></li>
              <li><Link href="/properties/commercial" className="text-white/50 hover:text-white transition-colors text-sm font-light">Commercial Spaces</Link></li>
              <li><Link href="/properties/plots" className="text-white/50 hover:text-white transition-colors text-sm font-light">Plots & Land</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1 border-l border-white/5 pl-4 md:pl-8">
            <h4 className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors text-sm font-light">About Us</Link></li>
              <li><Link href="/locations" className="text-white/50 hover:text-white transition-colors text-sm font-light">Areas We Cover</Link></li>
              <li><Link href="/gallery" className="text-white/50 hover:text-white transition-colors text-sm font-light">Visual Journey</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors text-sm font-light">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1 border-l border-white/5 pl-4 md:pl-8">
            <h4 className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
              Subscribe for exclusive, unlisted property notifications.
            </p>
            <form className="flex flex-col gap-4">
               <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/20 text-white text-sm pb-2 w-full focus:outline-none focus:border-[#B8860B] transition-colors" />
               <button className="text-left text-[#B8860B] hover:text-white transition-colors font-bold text-xs uppercase tracking-widest mt-2 hover:translate-x-2 duration-300">Subscribe &rarr;</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left font-light">
            © {new Date().getFullYear()} Invest In Narela. All rights reserved. Built with ✦ for luxury real estate.
          </p>
          <div className="text-white/40 text-[10px] flex flex-wrap justify-center gap-6 font-bold uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
