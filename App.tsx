import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import OnboardingWizard from './components/OnboardingWizard';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [wizardOpen, setWizardOpen] = React.useState(false);

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-brand-lime selection:text-white animate-in fade-in duration-700">
        <Routes>
          <Route path="/" element={<Home onStartAssessment={startAssessment} />} />
          <Route path="/residential" element={<Residential onStartAssessment={startAssessment} />} />
          <Route path="/commercial" element={<Commercial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;