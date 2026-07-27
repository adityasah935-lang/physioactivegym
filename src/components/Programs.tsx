import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { TRAINING_PROGRAMS, WHATSAPP_LINKS } from '../data/gymData';

interface ProgramsProps {
  onOpenModalWithProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenModalWithProgram }) => {
  return (
    <section id="programs" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
              TRAINING PROGRAMS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none">
              TRAIN WITH <span className="text-orange-500">PURPOSE.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-sans text-sm sm:text-base">
            Structured fitness programs engineered for progressive strength, body composition, cardiovascular endurance, and personal coaching in Mumbai.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINING_PROGRAMS.map((program, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-orange-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 ${
                  isLarge ? 'md:col-span-1' : 'md:col-span-1'
                }`}
              >
                {/* Background Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold">
                    PROGRAM / 0{index + 1}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="p-6 sm:p-8 relative z-10 -mt-12 bg-gradient-to-b from-transparent via-zinc-950 to-zinc-950">
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                    {program.name}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-3">
                    {program.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {program.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onOpenModalWithProgram(program.name)}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white group-hover:text-orange-400 transition-colors"
                    >
                      <span>ENQUIRE NOW</span>
                      <ArrowUpRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <a
                      href={`https://wa.me/917045921010?text=${encodeURIComponent(program.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-md bg-zinc-900 hover:bg-emerald-600/20 text-[11px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 transition-colors"
                    >
                      WHATSAPP
                    </a>
                  </div>
                </div>

                {/* Subtle Orange Line Animation on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
