import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['אודות', 'שירותים', 'לקוחות'];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 transition-all duration-300 ease-in-out border-b border-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-1">
          <div className="relative w-10 h-10">
            <img src="/logo.svg" alt="APRO Logo" className="w-full h-full object-contain" />
          </div>
          <img src="/company_name.png" alt="Apro Company Name" className="h-8 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-brand-lime transition-colors text-base font-medium"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2.5 border border-brand-lime text-brand-forest font-semibold rounded-lg bg-transparent hover:bg-brand-lime hover:text-white transition-all duration-300">
            כניסה לדיירים
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-lg flex flex-col gap-4 items-start">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-800 text-lg font-medium w-full text-right"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px w-full bg-gray-100 my-2"></div>
          <button className="w-full text-center py-3 border border-brand-lime text-brand-forest rounded-lg font-bold">
            כניסה לדיירים
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;