import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_LINKS } from '../data/gymData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[99999] flex items-center gap-3 select-none">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950/95 border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-4">
          <span>Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-500 hover:text-white p-0.5 transition-colors"
            title="Close hint"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Circular Green Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINKS.general}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp with PhysioActive Pro Fitness Gym"
        title="Chat on WhatsApp"
      >
        {/* Soft Green Breathing Radar Glow */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

        {/* White Official WhatsApp Icon */}
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:rotate-12 transition-transform duration-300 relative z-10 drop-shadow-md" />
      </a>
    </div>
  );
};

