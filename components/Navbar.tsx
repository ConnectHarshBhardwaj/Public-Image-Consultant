'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Properties', 
      href: '/properties',
      hasDropdown: true,
      items: [
        { name: 'Luxury Villas', href: '/properties/luxury' },
        { name: 'Builder Floors', href: '/properties/builder-floors' },
        { name: 'Commercial Spaces', href: '/properties/commercial' },
        { name: 'Plots & Land', href: '/properties/plots' },
      ]
    },
    { 
      name: 'Narela Areas', 
      href: '/locations',
      hasDropdown: true,
      items: [
        { name: 'Sector A1', href: '/locations/sector-a1' },
        { name: 'Swatantra Nagar', href: '/locations/swatantra-nagar' },
        { name: 'Narela Industrial Area', href: '/locations/narela-industrial-area' },
        { name: 'View All Areas', href: '/locations' },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
  ];

  const textColor = isScrolled ? 'text-black' : 'text-white';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link href="/" className={`flex items-center gap-3 group z-[110] ${textColor}`}>
              <span className={`font-heading font-black text-2xl tracking-tighter mix-blend-difference`}>
                Invest In <span className="italic font-light">Narela</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className={`hidden xl:flex gap-8 text-xs font-semibold tracking-widest uppercase ${textColor}`}>
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group py-2"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="hover:text-[#B8860B] transition-colors flex items-center gap-1 mix-blend-difference"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-4 z-50 text-gray-800"
                    >
                      {link.items?.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.href}
                          className="block px-6 py-2 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <Link
                href="/contact"
                className={`border px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                  isScrolled 
                    ? 'border-black text-black hover:bg-black hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                Schedule Visit
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className={`xl:hidden flex items-center z-[110] ${textColor}`}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 mix-blend-difference" /> : <Menu className="w-6 h-6 mix-blend-difference" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden fixed top-[80px] left-0 right-0 bg-white border-b border-gray-100 shadow-2xl overflow-hidden z-40"
          >
            <div className="px-4 pt-4 pb-8 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="block px-3 py-4 text-xs font-bold uppercase tracking-widest text-black hover:text-[#B8860B] transition-colors border-b border-gray-50"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 space-y-1 bg-gray-50/50 my-1 py-2">
                      {link.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-3 text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8 px-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-6 py-4 bg-black text-white font-bold uppercase tracking-widest text-xs"
                >
                  Schedule Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
