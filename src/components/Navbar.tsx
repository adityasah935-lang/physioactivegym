import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, ArrowRight } from 'lucide-react';
import { GYM_DETAILS, WHATSAPP_LINKS } from '../data/gymData';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-orange-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group" id="nav-brand-logo">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black font-black shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
            <Dumbbell className="w-5 h-5 text-black stroke-[2.5]" />
          </div>
          <div>
            <div className="font-display text-2xl tracking-wider text-white leading-none flex items-center gap-1">
              PHYSIO<span className="text-orange-500">ACTIVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block animate-pulse"></span>
            </div>
            <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-400 leading-tight">
              PRO FITNESS GYM • MUMBAI
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wider text-zinc-300 hover:text-orange-400 transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={GYM_DETAILS.telLink}
            className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-orange-400 transition-colors px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/30"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            <span>{GYM_DETAILS.phone}</span>
          </a>

          <button
            onClick={onOpenModal}
            id="nav-join-gym-btn"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold tracking-wider text-black rounded-md bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            <span className="text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5">
              JOIN THE GYM
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenModal}
            className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider bg-orange-500 text-black rounded-md shadow-md shadow-orange-500/20"
          >
            JOIN
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-orange-400 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0f]/95 backdrop-blur-xl border-b border-orange-500/30 shadow-2xl p-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-zinc-200 hover:text-orange-400 uppercase tracking-wider py-2 border-b border-zinc-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-orange-500 font-mono">/0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={GYM_DETAILS.telLink}
                className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-bold text-zinc-200"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Call Us: {GYM_DETAILS.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-lg shadow-lg shadow-orange-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>JOIN THE GYM NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
