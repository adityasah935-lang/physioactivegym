import React, { useState, useEffect } from 'react';
import { X, User, Phone, Send, CheckCircle2, Dumbbell } from 'lucide-react';
import { WHATSAPP_LINKS, GYM_DETAILS } from '../data/gymData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'Membership',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDay, setPreferredDay] = useState('Tomorrow');
  const [preferredTime, setPreferredTime] = useState('Evening (5:00 PM - 8:00 PM)');
  const [interest, setInterest] = useState(defaultProgram);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProgram) {
      setInterest(defaultProgram);
    }
  }, [defaultProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const waUrl = WHATSAPP_LINKS.buildAppointmentUrl({
      fullName,
      phone,
      preferredDay,
      preferredTime,
      interest,
    });

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl glow-orange">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-500 text-black flex items-center justify-center font-black">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-wide leading-tight">
              JOIN {GYM_DETAILS.shortName}
            </h3>
            <p className="text-xs text-zinc-400">
              Submit your details to receive instant membership plans on WhatsApp.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-display text-2xl font-bold text-white uppercase mb-2">
              Redirecting to WhatsApp...
            </h4>
            <p className="text-xs text-zinc-300 max-w-sm mx-auto mb-6">
              Press <strong>SEND</strong> in WhatsApp to deliver your enquiry directly to PhysioActive Pro Fitness Gym.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-200"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Mobile Number"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Day
                </label>
                <select
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none"
                >
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend">This Weekend</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Interested In
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none"
                >
                  <option value="Membership">Membership</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Cardio Training">Cardio Training</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-widest hover:from-orange-400 hover:to-amber-400 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 mt-2"
            >
              <span>SEND ENQUIRY ON WHATSAPP</span>
              <Send className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-zinc-500 text-center font-sans mt-2">
              Opens WhatsApp with pre-filled details for instant response.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
