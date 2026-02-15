import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-4 border-brand-lime">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8">
                <img src="/logo.svg" alt="APRO Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                APRO
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              שירותי ניהול נכסים המשלבים טכנולוגיה מתקדמת עם שירות אישי. הסטנדרט החדש של תל אביב.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-100">ניווט מהיר</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-brand-lime transition-colors">עמוד הבית</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-brand-lime transition-colors">אודות החברה</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-brand-lime transition-colors">השירותים שלנו</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-brand-lime transition-colors">שאלות ותשובות</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-100">שירותים</h4>
            <ul className="space-y-2">
              <li><Link to="/residential" className="text-gray-400 hover:text-brand-lime transition-colors">ניהול בנייני מגורים</Link></li>
              <li><Link to="/commercial" className="text-gray-400 hover:text-brand-lime transition-colors">ניהול נכסים מסחריים</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-100">צרו קשר</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>חברון 8, תל אביב</span>
              </li>
              <li className="flex items-center gap-2">
                <span dir="ltr">055-5535891</span>
              </li>
              <li>
                <a href="mailto:office@apro.co.il" className="hover:text-brand-lime transition-colors">office@apro.co.il</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 APRO. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-white transition-colors">נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;