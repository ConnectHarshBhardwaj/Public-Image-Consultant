export function Footer() {
  return (
    <footer className="bg-[#01050b] py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">
                P I <span className="text-[#D4AF37]">C</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Delhi’s Premier Political PR & Public Image Consultancy. Building authority and public trust.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Campaigns</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Phone: <a href="tel:+919310868777" className="hover:text-white transition-colors">+91 93108 68777</a></li>
              <li className="text-gray-400 text-sm">Location: Sanoth Village, Delhi</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Public Image Consultant (PIC). All rights reserved.
          </p>
          <div className="text-gray-500 text-xs flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
