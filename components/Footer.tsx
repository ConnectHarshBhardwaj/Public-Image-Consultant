export function Footer() {
  return (
    <footer className="bg-[#0B1A2E] py-12 border-t border-[#1E3A8A]/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">
                HAWK<span className="text-[#3B82F6]">STRATEGIES</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-4">
              Delhi’s Leading Political Strategy & Consulting Agency. Building authority and public trust.
            </p>
            <p className="text-[#60A5FA] text-xs font-bold uppercase tracking-widest">
              &quot;Crafting Political Influence Through Strategy &amp; Leadership.&quot;
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/electoral-data-management" className="text-gray-300 hover:text-white transition-colors text-sm">Electoral Data Management</a></li>
              <li><a href="/services/campaign-management" className="text-gray-300 hover:text-white transition-colors text-sm">Campaign Management</a></li>
              <li><a href="/services/reputation-management" className="text-gray-300 hover:text-white transition-colors text-sm">Reputation Management</a></li>
              <li><a href="/services/social-media-pr" className="text-gray-300 hover:text-white transition-colors text-sm">Social Media PR</a></li>
              <li><a href="/services/media-coverage" className="text-gray-300 hover:text-white transition-colors text-sm">Media Coverage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact & Connect</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm flex gap-2"><span className="text-[#3B82F6]">P:</span> <a href="tel:+919310868777" className="hover:text-white transition-colors">+91 93108 68777</a></li>
              <li className="text-gray-300 text-sm flex gap-2"><span className="text-[#3B82F6]">A:</span> Sanoth Village, Delhi</li>
              <li><a href="/contact" className="text-[#60A5FA] hover:text-white transition-colors text-sm font-bold uppercase mt-4 block">Book Consultation &rarr;</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Hawk Strategies. All rights reserved.
          </p>
          <div className="text-gray-500 text-xs flex gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
