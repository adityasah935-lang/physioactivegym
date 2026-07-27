import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Facilities } from './components/Facilities';
import { Coaching } from './components/Coaching';
import { MembershipCTA } from './components/MembershipCTA';
import { AppointmentForm } from './components/AppointmentForm';
import { GoogleReviews } from './components/GoogleReviews';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { IntroLoader } from './components/IntroLoader';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('Membership');
  const [introFinished, setIntroFinished] = useState(false);

  const handleOpenModal = () => {
    setSelectedProgram('Membership');
    setModalOpen(true);
  };

  const handleOpenModalWithProgram = (programName: string) => {
    setSelectedProgram(programName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-orange-500 selection:text-black relative">
      {/* Cinematic Page Load Opening Overlay */}
      <IntroLoader onComplete={() => setIntroFinished(true)} />

      {/* Fixed Floating WhatsApp Action (Always rendered on top level) */}
      <FloatingWhatsApp />

      {/* Main Website Wrapper with subtle entrance transition */}
      <div 
        className={`transition-all duration-1000 ease-out ${
          introFinished 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-2 scale-[0.995]'
        }`}
      >
        {/* Sticky Top Navigation */}
        <Navbar onOpenModal={handleOpenModal} />

        {/* Main Content Sections */}
        <main>
          {/* Full-Screen Hero */}
          <Hero onOpenModal={handleOpenModal} />

          {/* Verified Trust Stats Bar */}
          <TrustStats />

          {/* Editorial About Section */}
          <About onOpenModal={handleOpenModal} />

          {/* Training Programs */}
          <Programs onOpenModalWithProgram={handleOpenModalWithProgram} />

          {/* Facilities & Equipment Showcase */}
          <Facilities />

          {/* Coaching & Personal Training Section */}
          <Coaching onOpenModalWithProgram={handleOpenModalWithProgram} />

          {/* High-Conversion Membership CTA */}
          <MembershipCTA onOpenModal={handleOpenModal} />

          {/* Interactive Appointment Consultation Request Form */}
          <AppointmentForm />

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Accordion FAQ Section */}
          <FAQSection />

          {/* Location & Opening Hours Info */}
          <LocationSection />

          {/* Cinematic Final Full-Screen CTA */}
          <FinalCTA onOpenModal={handleOpenModal} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Quick Action Modal */}
        <AppointmentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultProgram={selectedProgram}
        />
      </div>
    </div>
  );
}
