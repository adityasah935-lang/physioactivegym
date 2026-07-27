import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, ShieldCheck, ChevronDown, Dumbbell } from 'lucide-react';
import { GYM_DETAILS, WHATSAPP_LINKS } from '../data/gymData';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0a0a0c]">
      {/* Background Image with Dark Overlay & Atmospheric Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.55 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={GYM_DETAILS.heroBg}
            alt="PhysioActive Pro Fitness Gym Interior"
            className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-[#0a0a0c]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]" />
        
        {/* Subtle Warm Orange Glow Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-orange-500/30 text-zinc-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-8 shadow-xl shadow-orange-500/10"
        >
          <MapPin className="w-3.5 h-3.5 text-orange-500 animate-bounce" />
          <span>GRANT ROAD WEST • TARDEO • MUMBAI</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white uppercase leading-[0.88] mb-6 drop-shadow-2xl"
        >
          BUILD YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 text-glow">
            STRONGEST SELF.
          </span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-sans font-medium leading-relaxed mb-10 text-balance"
        >
          Premium strength, conditioning and fitness training in the heart of Grant Road West & Tardeo, Mumbai. Train with clear purpose and real results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onOpenModal}
            id="hero-start-journey-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-sm uppercase tracking-widest hover:from-orange-400 hover:to-amber-400 transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-white font-extrabold text-sm uppercase tracking-widest border border-zinc-700/80 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE THE GYM</span>
            <Dumbbell className="w-4 h-4 text-orange-500 group-hover:rotate-45 transition-transform" />
          </a>
        </motion.div>

        {/* Verified Quick Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-14 flex items-center justify-center gap-6 sm:gap-10 text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>4.0 ⭐ Google Rating</span>
          </div>
          <div className="w-1 h-1 bg-zinc-700 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>113+ Verified Reviews</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 hover:text-orange-400 transition-colors cursor-pointer"
        >
          <a href="#trust-stats" className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase font-mono tracking-widest">SCROLL</span>
            <ChevronDown className="w-4 h-4 text-orange-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
