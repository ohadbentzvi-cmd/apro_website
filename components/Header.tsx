import React, { useState } from 'react';
import Button from './UI/Button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onStart?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 transition-all duration-300 ease-in-out border-b border-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Right Side: Logo + Navigation */}
        <div className="flex items-center gap-10">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-1">
            <div className="relative w-10 h-10">
              <img src="/logo.svg" alt="APRO Logo" className="w-full h-full object-contain" />
            </div>
            <img src="/company_name_optimized.webp" alt="Apro Company Name" className="h-8 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-brand-lime transition-colors text-base font-medium"
            >
              דף הבית
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-600 hover:text-brand-lime transition-colors text-base font-medium flex items-center gap-1"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                שירותים
              </button>
              <div
                className={`absolute top-full right-0 pt-4 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-64 p-2 text-right">
                  <Link to="/residential" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-brand-forest transition-colors font-medium">
                    ניהול בנייני מגורים
                  </Link>
                  <Link to="/commercial" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-brand-forest transition-colors font-medium">
                    ניהול נכסים מסחריים
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Left Side: CTA Button (Desktop) & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Visible on Desktop */}
          <Button
            onClick={onStart}
            variant="primary"
            size="sm"
            className="hidden md:flex"
          >
            קבלו הצעת מחיר
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-lg flex flex-col gap-4 items-start">
          <Link
            to="/"
            className="text-gray-800 text-lg font-medium w-full text-right"
            onClick={() => setMobileMenuOpen(false)}
          >
            דף הבית
          </Link>
          <Link
            to="/residential"
            className="text-gray-800 text-lg font-medium w-full text-right"
            onClick={() => setMobileMenuOpen(false)}
          >
            ניהול בנייני מגורים
          </Link>
          <Link
            to="/commercial"
            className="text-gray-800 text-lg font-medium w-full text-right"
            onClick={() => setMobileMenuOpen(false)}
          >
            ניהול נכסים מסחריים
          </Link>
          <Button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onStart) onStart();
            }}
            variant="primary"
            size="md"
            className="w-full mt-2"
          >
            קבלו הצעת מחיר
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;