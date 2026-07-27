import React from 'react';
import { Dumbbell, MapPin, Phone, ArrowUp } from 'lucide-react';
import { GYM_DETAILS, WHATSAPP_LINKS } from '../data/gymData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500 text-black font-black flex items-center justify-center">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="font-display text-2xl tracking-wider text-white">
                PHYSIO<span className="text-orange-500">ACTIVE</span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-sm">
              PhysioActive Pro Fitness Gym is a premier fitness and strength training destination located in Grant Road West, Tardeo, Mumbai. Built for individuals committed to real results.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_DETAILS.telLink}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-white hover:border-orange-500 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>{GYM_DETAILS.phone}</span>
              </a>
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold text-emerald-400 hover:bg-emerald-600 hover:text-black transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 mb-4">
              MUMBAI LOCATION
            </h4>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              {GYM_DETAILS.fullAddress}
            </p>
            <div className="pt-2">
              <a
                href={GYM_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-orange-500 hover:underline inline-flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-500">
          <div>
            © 2026 PhysioActive Pro Fitness Gym. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-orange-400 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-orange-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
