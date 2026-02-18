import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AccessibilityStatement from './pages/AccessibilityStatement';
import OnboardingWizard from './components/OnboardingWizard';
import ScrollToTop from './components/ScrollToTop';

const AppContent: React.FC = () => {
  const [wizardOpen, setWizardOpen] = useState(false);
  const location = useLocation();

  // Close wizard when location changes (e.g. clicking links in footer)
  useEffect(() => {
    setWizardOpen(false);
  }, [location]);

  const startAssessment = () => {
    setWizardOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeWizard = () => {
    setWizardOpen(false);
  };

  if (wizardOpen) {
    return <OnboardingWizard onBack={closeWizard} />;
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-brand-lime selection:text-white animate-in fade-in duration-700">
        <Routes>
          <Route path="/" element={<Home onStartAssessment={startAssessment} />} />
          <Route path="/residential" element={<Residential onStartAssessment={startAssessment} />} />
          <Route path="/commercial" element={<Commercial onStartAssessment={startAssessment} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;