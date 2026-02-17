import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CTAProps {
  onStart?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onStart }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A2F] via-[#15231b] to-[#0f0f0f]"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A4D65E] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
          מוכנים לשדרג את חווית המגורים?
        </h2>

        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="group relative px-12 py-6 bg-[#A4D65E] hover:bg-[#b0e065] text-[#1A1A1A] text-xl font-bold rounded-full shadow-[0_0_30px_-5px_rgba(164,214,94,0.4)] hover:shadow-[0_0_50px_-10px_rgba(164,214,94,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
          >
            <span>קבלו הצעת מחיר</span>
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;