'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'MCD 2027', href: '/#mcd-elections' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050B18]/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center font-bold text-xl text-[#050B18] rounded-sm">PIC</div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold tracking-tight leading-none text-white">PUBLIC IMAGE CONSULTANT</h1>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/919310868777" className="bg-[#25D366] hover:bg-[#20bd5a] transition-all text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2">
              WHATSAPP NOW
            </a>
            <Link
              href="/contact"
              className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 rounded-full text-xs font-bold hover:bg-[#D4AF37] hover:text-[#050B18] transition-all"
            >
              BOOK CONSULTATION
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050B18] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+919310868777"
                className="block mt-4 text-center px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wide text-sm rounded-sm"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
