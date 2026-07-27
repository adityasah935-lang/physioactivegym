import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQ_LIST, WHATSAPP_LINKS, GYM_DETAILS } from '../data/gymData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none mb-4">
            CLEAR <span className="text-orange-500">ANSWERS.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base">
            Have questions before starting? Find quick answers regarding our location, training programs, and membership enquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white hover:text-orange-400 transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-sans leading-snug">{faq.question}</span>
                  <div className={`p-2 rounded-lg bg-zinc-900 text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-orange-500 text-black' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-300 font-sans leading-relaxed border-t border-zinc-900 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white uppercase">Have a specific question not listed here?</div>
            <div className="text-xs text-zinc-400 mt-0.5">Chat directly with our team on WhatsApp or phone.</div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={GYM_DETAILS.telLink}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-orange-500 border border-zinc-800"
              title="Call Gym"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
