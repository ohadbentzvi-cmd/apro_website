import React from 'react';
import Button from './UI/Button';

interface HeroProps {
  onStart?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Background Image with Premium High-Contrast Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="Modern Tel Aviv architectural detail"
          className="w-full h-full object-cover grayscale opacity-20 scale-105"
          fetchPriority="high"
        />
        {/* Soft daylight overlay to ensure legibility and luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#FAFAFA] via-[#FAFAFA]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 w-full">
        {/* Right-aligned text container limited to 70% width for premium editorial flow */}
        <div className="w-full lg:max-w-[75%] xl:max-w-[70%] text-right mr-0 ml-auto">

          {/* Visual Anchor: APRO Logo */}
          <div className="mb-10 inline-block animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
            <img src="/logo.svg" alt="APRO Logo" className="w-14 h-14 object-contain drop-shadow-sm" />
          </div>

          {/* High-Authority Headline */}
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-[800] text-[#1A1A1B] leading-[1.1] tracking-tight mb-8 font-sans selection:bg-brand-lime selection:text-white">
            אפּרו חברה לניהול בניינים
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 mb-12 ml-auto max-w-3xl leading-relaxed">
            <p className=" text-[#1A1A1B] mb-2">חברת ניהול מדור חדש, החריצות של פעם עם דיוק של הייטק</p>
          </div>

          {/* CTA Container: Lean Glassmorphism "Magnifying Glass" Style */}
          <div className="inline-flex flex-col sm:flex-row gap-4 p-2.5 rounded-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button
              onClick={onStart}
              variant="primary"
              size="xl"
            >
              קבלו הצעת מחיר
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;