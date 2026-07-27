import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Dumbbell, Sparkles, Eye } from 'lucide-react';
import { FACILITY_ZONES } from '../data/gymData';
import { FacilityZone } from '../types';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeZone, setActiveZone] = useState<FacilityZone | null>(null);

  const categories = [
    { id: 'all', label: 'All Zones' },
    { id: 'strength', label: 'Strength Zone' },
    { id: 'weights', label: 'Free Weights' },
    { id: 'cardio', label: 'Cardio Floor' },
    { id: 'functional', label: 'Functional' },
    { id: 'environment', label: 'Environment' },
  ];

  const filteredZones = selectedCategory === 'all'
    ? FACILITY_ZONES
    : FACILITY_ZONES.filter(zone => zone.category === selectedCategory);

  return (
    <section id="facilities" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            FACILITIES & ENVIRONMENT
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none mb-4">
            PREMIUM <span className="text-orange-500">TRAINING SPACE.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base">
            Equipped for dedicated lifting, functional workouts, and stamina building in a clean, hygienic Grant Road West facility.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredZones.map((zone, index) => (
            <motion.div
              key={zone.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {/* View Details Button */}
                <button
                  onClick={() => setActiveZone(zone)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-orange-400 border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-500 hover:text-black"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-[10px] font-mono font-bold uppercase tracking-widest text-orange-400">
                  {zone.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors mb-2">
                  {zone.title}
                </h3>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                  {zone.description}
                </p>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2">
                  {zone.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-semibold text-zinc-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox for Facility Zone */}
        {activeZone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-zinc-950 border border-orange-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
              <button
                onClick={() => setActiveZone(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2"
              >
                ✕
              </button>
              <div className="rounded-xl overflow-hidden mb-6 h-64 sm:h-80">
                <img
                  src={activeZone.image}
                  alt={activeZone.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-white uppercase tracking-wide mb-2">
                {activeZone.title}
              </h3>
              <p className="text-sm text-zinc-300 mb-6">{activeZone.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeZone.features.map((f) => (
                  <span key={f} className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold rounded-lg">
                    ✓ {f}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveZone(null)}
                className="w-full py-3 bg-orange-500 text-black font-extrabold uppercase text-xs rounded-lg tracking-widest"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
