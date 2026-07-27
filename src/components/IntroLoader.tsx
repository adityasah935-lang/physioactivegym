import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Auto-dismiss after 1.3 seconds for a fast, punchy cinematic intro
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, prefersReducedMotion ? 300 : 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070709] overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Orange Glow */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 1.1], opacity: [0.1, 0.4, 0.25] }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-radial from-orange-500/35 via-amber-600/10 to-transparent blur-3xl pointer-events-none"
          />

          {/* Secondary expanding subtle ring pulse */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.6, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full border border-orange-500/20 pointer-events-none"
          />

          {/* Central Logo & Branding Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* Main Brand Title */}
            <motion.div
              initial={{ y: 25, opacity: 0, filter: 'blur(6px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.18em] sm:tracking-[0.22em] uppercase text-white font-serif drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                PHYSIO<span className="text-orange-500">ACTIVE</span>
              </h1>
            </motion.div>

            {/* Subtitle / Tagline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2.5 sm:mt-3 flex items-center gap-3"
            >
              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-orange-500" />
              <p className="text-xs sm:text-sm font-bold tracking-[0.35em] sm:tracking-[0.5em] uppercase text-orange-400/90 font-mono">
                PRO FITNESS GYM
              </p>
              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-orange-500/60 to-orange-500" />
            </motion.div>

            {/* Bottom Subtle Energy Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="mt-6 w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full shadow-[0_0_12px_#f97316]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
