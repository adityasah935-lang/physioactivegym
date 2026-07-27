import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Target, Activity, MessageSquare } from 'lucide-react';
import { WHATSAPP_LINKS } from '../data/gymData';

interface CoachingProps {
  onOpenModalWithProgram: (programName: string) => void;
}

export const Coaching: React.FC<CoachingProps> = ({ onOpenModalWithProgram }) => {
  const benefits = [
    {
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
      title: 'Dedicated 1-on-1 Guidance',
      desc: 'Receive direct form correction, tailored session structure, and workout accountability.',
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Goal-Oriented Pathways',
      desc: 'Whether dropping fat, building lean muscle mass, or increasing endurance, get clear direction.',
    },
    {
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      title: 'Biomechanics & Safety',
      desc: 'Master key lifts with correct anatomical mechanics to minimize injury risk and maximize results.',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-950 via-[#101014] to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Orange Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Header & Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
                COACHING & SUPPORT
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none mb-6">
                COACHING THAT <br />
                <span className="text-orange-500">KEEPS YOU MOVING.</span>
              </h2>

              <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
                Achieve your fitness milestones faster with dedicated floor support and personalized training guidance at PhysioActive Pro Fitness Gym. Enquire today to discuss your goals and schedule a consultation.
              </p>

              {/* Benefits Cards */}
              <div className="space-y-4 mb-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div className="p-2.5 rounded-lg bg-orange-500/10 shrink-0 h-fit">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {b.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINKS.personalTraining}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>ENQUIRE ABOUT PERSONAL TRAINING</span>
                </a>

                <button
                  onClick={() => onOpenModalWithProgram('Personal Training')}
                  className="px-6 py-4 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:border-orange-500/40 font-extrabold text-xs uppercase tracking-widest"
                >
                  BOOK CONSULTATION
                </button>
              </div>
            </motion.div>

            {/* Right Image Feature */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                  alt="Personal Training Coaching at PhysioActive Pro Gym"
                  className="w-full h-[400px] object-cover object-center filter contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-700">
                  <div className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
                    TAILORED FIT PROGRAM
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    1-on-1 Guidance & Progress Accountability
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
