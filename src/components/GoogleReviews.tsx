import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS, GOOGLE_REVIEWS_SUMMARY } from '../data/gymData';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
              GOOGLE REVIEWS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none">
              WHAT MEMBERS <span className="text-orange-500">SAY.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <Star className="w-5 h-5 text-zinc-600" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white leading-none">
                {GYM_DETAILS.googleRating} / 5.0
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Based on {GYM_DETAILS.googleReviewsCount} Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {GOOGLE_REVIEWS_SUMMARY.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between relative group hover:border-orange-500/30 transition-all shadow-xl"
            >
              <div>
                <Quote className="w-8 h-8 text-orange-500/20 mb-4" />
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-black text-sm flex items-center justify-center">
                    {rev.initial}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">{rev.author}</div>
                    <div className="text-[10px] text-zinc-500">{rev.timeAgo}</div>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-xs font-bold text-zinc-300 ml-1">{rev.rating}.0</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* External Google Reviews Link Button */}
        <div className="text-center">
          <a
            href={GYM_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="google-reviews-btn"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest border border-zinc-700 hover:border-orange-500 transition-all shadow-xl shadow-black/80 group"
          >
            <span>READ ALL {GYM_DETAILS.googleReviewsCount}+ GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4 text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
