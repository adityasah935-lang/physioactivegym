import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINKS } from '../data/gymData';

interface MembershipCTAProps {
  onOpenModal: () => void;
}

export const MembershipCTA: React.FC<MembershipCTAProps> = ({ onOpenModal }) => {
  const perks = [
    'Strength & Free Weights Floor',
    'Cardio & Stamina Zone',
    'Personal Training Guidance Available',
    'Convenient Grant Road West Location',
  ];

  return (
    <section className="py-20 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-950 via-[#141210] to-zinc-950 border border-orange-500/30 p-8 sm:p-14 text-center shadow-2xl glow-orange">
          
          {/* Subtle Orange Atmospheric Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              MEMBERSHIP ENQUIRIES
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white uppercase tracking-tight leading-none mb-6">
              YOUR NEXT LEVEL <br />
              <span className="text-orange-500 text-glow">STARTS HERE.</span>
            </h2>

            <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
              Whether you are beginning your fitness journey or looking to train with greater purpose, take the first step today. Contact us for active membership packages and tour the facility.
            </p>

            {/* Quick Perks Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                id="membership-enquire-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-widest hover:from-orange-400 hover:to-amber-400 transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 group"
              >
                <span>ENQUIRE ABOUT MEMBERSHIP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={WHATSAPP_LINKS.membership}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
