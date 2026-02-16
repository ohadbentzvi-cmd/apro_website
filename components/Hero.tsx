import React from 'react';

interface HeroProps {
  onStart?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Background Image with Premium High-Contrast Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzVgbSjtIMR-L4RYqh1fUCbTRs73t6oKVrLW6BxeIy8vWlUXQmZU3qxo90TC3W498Vis9bokTSUyBzYDPeWud8GHXF9jYgfW1JaJrTDdPBN5cpsxBu7SD3ySpnD4ryeDLk4goBS_UC2gATBBW-_XjG5DGf_DfYs4wyl6fwNDGuxvBlGooi5H1obMKAir7J-cA2WKY1cmZZGmmQdPcprAyXJnopx_m4uPrehFgE7rUhjSZtTvRiSt0F_mnRDqFudOCyz8EeIT9Akw"
          alt="Modern Tel Aviv architectural detail"
          className="w-full h-full object-cover grayscale opacity-20 scale-105"
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
            ניהול מבנים בסטנדרט אחר
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 mb-12 ml-auto max-w-3xl leading-relaxed">
            <p className=" text-[#1A1A1B] mb-2">דיוק של הייטק. שקט של בית.</p>
          </div>

          {/* CTA Container: Lean Glassmorphism "Magnifying Glass" Style */}
          <div className="inline-flex flex-col sm:flex-row gap-4 p-2.5 rounded-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <button
              onClick={onStart}
              className="group relative px-12 py-5 bg-gradient-to-br from-brand-lime to-[#8bc34a] text-white text-xl font-bold rounded-[1.25rem] shadow-lg shadow-brand-lime/20 hover:shadow-brand-lime/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">קבלו הצעת מחיר</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;