'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '/products', dropdown: [
    { label: 'Institutional Repository & Governance', href: '/products/institutional-repository', desc: 'Document governance and compliance' },
    { label: 'Faculty Operations & Smart Alerts', href: '/products/faculty-operations', desc: 'Academic operations management' },
    { label: 'Verified Participation & Activity', href: '/products/verified-participation', desc: 'Attendance and contribution tracking' },
    { label: 'Task Manager', href: '/products/task-manager', desc: 'Team execution and task tracking' },
  ]},
  { label: 'Solutions', href: '/solutions', dropdown: [
    { label: 'For Institutions', href: '/solutions/institutions', desc: 'Colleges, universities and departments' },
    { label: 'For Communities', href: '/solutions/communities', desc: 'Technology communities and organizations' },
  ]},
  { label: 'Pricing', href: '/pricing' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-light shadow-ith' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-9 h-9 rounded-lg bg-ith-navy flex items-center justify-center"
              >
                <span className="font-editorial font-bold text-ith-ivory text-lg">I</span>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-ith-orange" />
              </motion.div>
              <span className={`font-editorial font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-ith-navy' : 'text-ith-navy'}`}>
                InnoTech<span className="text-ith-orange">Hub</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setHoveredDropdown(link.label)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled ? 'text-ith-charcoal hover:text-ith-orange' : 'text-ith-charcoal hover:text-ith-orange'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                  </Link>

                  <AnimatePresence>
                    {link.dropdown && hoveredDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-ith-lg border border-ith-ivory-dark overflow-hidden"
                      >
                        <div className="p-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-ith-ivory transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-semibold text-ith-navy group-hover:text-ith-orange transition-colors">
                                    {item.label}
                                  </p>
                                  <p className="text-xs text-ith-slate mt-0.5">{item.desc}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-ith-slate opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-ith-navy hover:text-ith-orange transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/request-demo"
                className="group relative px-5 py-2.5 text-sm font-medium text-ith-ivory bg-ith-orange rounded-lg overflow-hidden transition-all hover:shadow-ith-glow"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Request a Demo
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-ith-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-ith-ivory-dark"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-ith-charcoal hover:bg-ith-ivory rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-ith-ivory-dark pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-xs text-ith-slate hover:text-ith-orange transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-ith-ivory-dark mt-3">
                  <Link
                    href="/request-demo"
                    className="block w-full text-center px-5 py-2.5 text-sm font-medium text-ith-ivory bg-ith-orange rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
