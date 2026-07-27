import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Dumbbell } from 'lucide-react';
import { GYM_DETAILS, WHATSAPP_LINKS } from '../data/gymData';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-28 bg-[#0a0a0c] overflow-hidden border-t border-zinc-900">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={GYM_DETAILS.heroBg}
          alt="PhysioActive Pro Fitness Gym"
          className="w-full h-full object-cover object-center filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]" />
      </div>

      {/* Atmospheric Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/10">
            <Dumbbell className="w-6 h-6" />
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold text-white uppercase tracking-tight leading-[0.9] mb-6">
            READY TO TRAIN <br />
            <span className="text-orange-500 text-glow">WITH PURPOSE?</span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-300 font-sans font-medium leading-relaxed mb-10">
            Your next step starts with one conversation. Join PhysioActive Pro Fitness Gym in Grant Road West, Tardeo, Mumbai today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenModal}
              id="final-join-btn"
              className="w-full sm:w-auto px-9 py-4.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-widest hover:from-orange-400 hover:to-amber-400 transition-all shadow-2xl shadow-orange-500/30 hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              <span>JOIN THE GYM</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-2xl shadow-emerald-600/20 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
