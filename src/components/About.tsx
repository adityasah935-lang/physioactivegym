import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Dumbbell, Target, Zap, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface AboutProps {
  onOpenModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  const pillars = [
    {
      title: 'Progressive Strength',
      desc: 'Focused resistance work with structured load progression to build real physical power.',
      icon: <Dumbbell className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Conditioning & Stamina',
      desc: 'Elevate endurance and metabolic output through balanced cardio and stamina routines.',
      icon: <Zap className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'Consistency & Purpose',
      desc: 'A no-nonsense, encouraging environment that keeps you accountable every week.',
      icon: <Target className="w-5 h-5 text-orange-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                  alt="Training at PhysioActive Pro Gym"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-orange-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-ping shrink-0" />
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                        GRANT ROAD WEST • MUMBAI
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Tukaram Javaji Marg, Tardeo
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-orange-500/30 pointer-events-none hidden sm:block -z-0" />
            </div>
          </motion.div>

          {/* Right Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            {/* Small Orange Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              ABOUT PHYSIOACTIVE
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none mb-6">
              MORE THAN <br />
              <span className="text-orange-500">A GYM.</span>
            </h2>

            {/* Paragraph Text */}
            <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
              PhysioActive Pro Fitness Gym is a dedicated fitness destination in Grant Road West, Tardeo, Mumbai, designed for individuals who want to train with purpose. Whether your focus is building foundational power, dropping body fat, or maintaining lifelong athletic vitality, our space is built to empower your progress.
            </p>

            {/* Pillars List */}
            <div className="space-y-4 mb-10">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-orange-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10 shrink-0 h-fit">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenModal}
                className="px-7 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group"
              >
                <span>JOIN OUR COMMUNITY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#programs"
                className="px-6 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-bold uppercase tracking-widest"
              >
                VIEW PROGRAMS
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
