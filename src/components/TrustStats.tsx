import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, MapPin, Users } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      value: `${GYM_DETAILS.googleReviewsCount}+`,
      label: 'Google Reviews',
      sublabel: 'Authentic Member Feedback',
    },
    {
      icon: <Star className="w-6 h-6 text-amber-400 fill-amber-400" />,
      value: `${GYM_DETAILS.googleRating} ★`,
      label: 'Google Rating',
      sublabel: 'Consistently Rated High',
    },
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      value: 'PREMIUM',
      label: 'Training Environment',
      sublabel: 'Clean & Equipped Floor',
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      value: 'MUMBAI',
      label: 'Prime Location',
      sublabel: 'Grant Road West • Tardeo',
    },
  ];

  return (
    <section id="trust-stats" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/90 glow-orange">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center gap-4 ${index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-wide leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
