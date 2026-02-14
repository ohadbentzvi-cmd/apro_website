import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';
import OnboardingWizard from './components/OnboardingWizard';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'wizard'>('landing');

  const startAssessment = () => {
    setView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setView('landing');
  };

  if (view === 'wizard') {
    return <OnboardingWizard onBack={goHome} />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-brand-lime selection:text-white animate-in fade-in duration-700">
      <Header />
      <main>
        <Hero onStart={startAssessment} />
        <Benefits />
        <Vision />
        <CTA onStart={startAssessment} />
      </main>
      <Footer />
    </div>
  );
};

export default App;