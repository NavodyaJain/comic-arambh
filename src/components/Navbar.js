// components/Navbar.js
'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'performances', 'gallery', 'booking'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'performances', label: 'Performances' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'booking', label: 'Book Me' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/95 backdrop-blur-md comic-border' : 'py-6'
      }`}
      style={{
        transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
        animation: 'slide-down 0.5s ease-out 0.3s forwards'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-8 bg-primary"></div>
            <span className="font-display text-2xl font-bold text-primary">
              COMIC ARAMBH
            </span>
            <div className="w-3 h-8 bg-accent"></div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-display font-bold text-lg transition-all duration-300 hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary transform scale-x-100 transition-transform duration-300"></span>
                )}
              </a>
            ))}
          </div>

          <button className="md:hidden px-4 py-2 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-transform">
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
}