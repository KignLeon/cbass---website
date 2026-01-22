
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-500/20">
            I
          </div>
          <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            {CONTACT_INFO.logoText} <span className="text-amber-500 font-normal">ELECTRICAL</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-semibold hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Services</a>
          <a href="#why-integrity" className={`text-sm font-semibold hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Why Integrity</a>
          <a href="#tesla" className={`text-sm font-semibold hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Tesla Powerwall</a>
        </div>

        <div className="flex items-center gap-4">
          <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="hidden sm:flex items-center gap-2 text-amber-500 font-bold hover:text-amber-600">
            <i className="fa-solid fa-phone"></i>
            <span className="hidden lg:inline">{CONTACT_INFO.phone}</span>
          </a>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-amber-500/20 transition-all"
          >
            Request Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
