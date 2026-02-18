import React from 'react';
import Button from './UI/Button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onStart?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStart }) => {
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
            {/* No nav items as per request */}
          </nav>
        </div>

        {/* Left Side: CTA Button */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Visible on all screens */}
          <Button
            href="tel:0555535891"
            variant="primary"
            size="sm"
            className="flex"
            leftIcon={<Phone className="w-4 h-4 text-white" />}
          >
            055-5535891
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;