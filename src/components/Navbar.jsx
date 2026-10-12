import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3.5 sm:pt-4">
      <nav 
        className={`w-full max-w-6xl px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-between bg-[#1e2238]/80 backdrop-blur-xl border border-pink-400/25 shadow-[0_10px_35px_rgba(0,0,0,0.4)] ${
          scrolled ? 'shadow-[0_14px_40px_rgba(56,189,248,0.18)] bg-[#191c30]/90 border-blue-400/40' : ''
        }`}
      >
        {/* Animated Gradient Shimmer Logo: Blue to Pink */}
        <a 
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer select-none"
        >
          Geetha R
        </a>

        {/* Desktop Nav Links with active sliding underline */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.label} className="relative py-1">
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-pink-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'text-slate-200 hover:text-sky-300'
                  }`}
                >
                  {item.label}
                </a>
                {/* Sliding / growing underline for active link */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 to-pink-500 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full opacity-100 shadow-[0_0_8px_#38bdf8]' : 'w-0 opacity-0'
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-400 p-2 focus:outline-none hover:text-sky-300 transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed top-20 left-4 right-4 bg-[#1f243d]/95 backdrop-blur-2xl border border-pink-400/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 text-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`block py-2 text-base font-semibold transition-colors rounded-lg ${
                    isActive ? 'text-pink-400 font-bold bg-pink-500/15' : 'text-slate-200 hover:text-sky-300'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
