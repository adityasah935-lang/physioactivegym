import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { GYM_DETAILS, WHATSAPP_LINKS } from '../data/gymData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            VISIT & CONTACT
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none mb-4">
            LOCATION & <span className="text-orange-500">HOURS.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base">
            Located conveniently in Grant Road West, beside Wallace Apartment & opposite Aikya Signature, Tardeo, Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">
              
              {/* Address Block */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-400 font-bold mb-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>LOCATION ADDRESS</span>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-wide mb-2">
                  {GYM_DETAILS.name}
                </h3>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {GYM_DETAILS.fullAddress}
                </p>
              </div>

              {/* Landmark Highlight */}
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300">
                <span className="font-bold text-white uppercase block mb-0.5">Key Landmark:</span>
                Beside Wallace Apartment, opposite Aikya Signature, Grant Road West.
              </div>

              {/* Phone Block */}
              <div className="pt-4 border-t border-zinc-900">
                <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold mb-2">
                  PHONE CONTACT
                </div>
                <a
                  href={GYM_DETAILS.telLink}
                  className="font-display text-3xl font-extrabold text-white hover:text-orange-400 transition-colors inline-flex items-center gap-3"
                >
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span>{GYM_DETAILS.phone}</span>
                </a>
              </div>

              {/* Opening Hours Block */}
              <div className="pt-4 border-t border-zinc-900">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-400 font-bold mb-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>OPENING HOURS</span>
                </div>
                <p className="text-sm font-bold text-white uppercase mb-1">
                  CONTACT THE GYM FOR CURRENT OPENING HOURS
                </p>
                <p className="text-xs text-zinc-400">
                  Hours may vary on holidays. Please call or WhatsApp us before visiting for updated schedules.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={GYM_DETAILS.telLink}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:border-orange-500"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>CALL NOW</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Map Embed / Visual Map Box */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden h-[450px] sm:h-[550px] relative shadow-2xl group">
              <iframe
                title="PhysioActive Pro Fitness Gym Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.238472851416!2d72.8130!3d18.9660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0e0e0e0e0e%3A0x0!2sGrant%20Road%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full filter contrast-125 grayscale invert opacity-80 group-hover:opacity-100 transition-opacity duration-500 border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/90 backdrop-blur-md border border-orange-500/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-black font-black flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">PhysioActive Pro Gym</div>
                    <div className="text-[11px] text-zinc-400">Tardeo, Grant Road West, Mumbai</div>
                  </div>
                </div>

                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-orange-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 hover:bg-orange-400"
                >
                  <span>OPEN MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
