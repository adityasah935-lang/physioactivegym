import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { AppointmentFormData } from '../types';
import { WHATSAPP_LINKS } from '../data/gymData';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    preferredDay: 'Tomorrow',
    preferredTime: 'Evening (5:00 PM - 8:00 PM)',
    interest: 'Membership',
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const days = ['Today', 'Tomorrow', 'This Saturday', 'This Sunday', 'Next Week'];
  const times = [
    'Morning (7:00 AM - 11:00 AM)',
    'Afternoon (11:00 AM - 4:00 PM)',
    'Evening (5:00 PM - 9:00 PM)',
  ];
  const interests: AppointmentFormData['interest'][] = [
    'Membership',
    'Personal Training',
    'Strength Training',
    'General Enquiry',
  ];

  const validate = () => {
    const errs: { fullName?: string; phone?: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build dynamic pre-filled WhatsApp link
    const waUrl = WHATSAPP_LINKS.buildAppointmentUrl(formData);
    setSubmitted(true);

    // Open WhatsApp in new window after brief delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="appointment" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              FREE CONSULTATION & TOUR
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight leading-none mb-6">
              SCHEDULE A <br />
              <span className="text-orange-500">GYM VISIT.</span>
            </h2>

            <p className="text-zinc-300 font-sans text-base leading-relaxed mb-8">
              Experience the training floor firsthand. Request an appointment or consultation time, and our team in Grant Road West will confirm availability over WhatsApp.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase">Direct WhatsApp Confirmation</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Your request opens in WhatsApp with details pre-filled.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase">No Pressure Consultation</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Walk through the facility and discuss your training goals.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative glow-orange">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-extrabold text-white uppercase mb-2">
                    Opening WhatsApp...
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                    Your appointment details have been prepared. Please press <strong>SEND</strong> in WhatsApp to complete your request.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white"
                  >
                    Edit Form Details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full bg-zinc-900 border ${
                            errors.fullName ? 'border-red-500' : 'border-zinc-800 focus:border-orange-500'
                          } rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98200 12345"
                          className={`w-full bg-zinc-900 border ${
                            errors.phone ? 'border-red-500' : 'border-zinc-800 focus:border-orange-500'
                          } rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Preferred Day & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Preferred Day
                      </label>
                      <select
                        value={formData.preferredDay}
                        onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl py-3 px-4 text-sm text-white focus:outline-none"
                      >
                        {days.map((d) => (
                          <option key={d} value={d} className="bg-zinc-900">{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl py-3 px-4 text-sm text-white focus:outline-none"
                      >
                        {times.map((t) => (
                          <option key={t} value={t} className="bg-zinc-900">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interest Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {interests.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setFormData({ ...formData, interest: item })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                            formData.interest === item
                              ? 'bg-orange-500 text-black border-orange-500 shadow-md shadow-orange-500/20'
                              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-appointment-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-widest hover:from-orange-400 hover:to-amber-400 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    <span>REQUEST AN APPOINTMENT</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-sans">
                    Your details are used only to help us respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
