"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      items: [
        { name: "Political PR", href: "/services/political-pr" },
        {
          name: "Election Campaign Strategy",
          href: "/services/election-campaign-strategy",
        },
        {
          name: "Social Media Management",
          href: "/services/social-media-management",
        },
        { name: "Crisis Management", href: "/services/crisis-management" },
        {
          name: "Reputation Management",
          href: "/services/reputation-management",
        },
        { name: "Digital Advertising", href: "/services/digital-advertising" },
        {
          name: "Booth-Level Strategy",
          href: "/services/booth-level-strategy",
        },
      ],
    },
    { name: "War Room", href: "/war-room" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter leading-none text-[#0B1A2E] uppercase font-heading">
                  HAWK<span className="text-[#1E3A8A]">STRATEGIES</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex gap-6 text-sm font-semibold uppercase tracking-wider text-gray-600">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="hover:text-[#1E3A8A] transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {!link.hasDropdown && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
                )}

                {/* Mega Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden py-2"
                  >
                    {link.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#1E3A8A]"
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
              className="bg-[#0B1A2E] text-white px-7 py-3 rounded-md text-xs font-bold uppercase tracking-wide hover:bg-[#1E3A8A] transition-all shadow-md"
            >
              Book Political Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0B1A2E] hover:text-[#1E3A8A] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() =>
                      !link.hasDropdown && setIsMobileMenuOpen(false)
                    }
                    className="block px-3 py-3 text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 space-y-1">
                      {link.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-[#1E3A8A]"
                        >
                          - {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-6 text-center px-6 py-4 bg-[#0B1A2E] text-white font-bold uppercase tracking-wide text-sm rounded-md shadow-sm"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
