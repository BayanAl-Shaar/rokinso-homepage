'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'portfolio', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToConsultation = () => {
    window.open('https://wa.me/905421199097', '_blank');
  };

  const navItems = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'features', label: 'الخدمات' },
    { id: 'portfolio', label: 'أعمالنا السابقة' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'التواصل' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt="Rokinso - Rocket Into Solutions"
              className="h-10 sm:h-11 lg:h-12 w-auto"
            />
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 text-sm transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? 'text-[#03045E] bg-[#03045E]/5 font-semibold'
                    : 'text-gray-600 hover:text-[#FC54BB] hover:bg-gray-50 font-medium'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={scrollToConsultation}
            className="flex-shrink-0 bg-[#FC54BB] hover:bg-[#e64aa9] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 hover:scale-105"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">احجز استشارة مجانية</span>
            <span className="sm:hidden">استشارة</span>
          </button>
        </div>
      </div>
    </header>
  );
}
