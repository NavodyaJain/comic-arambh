// components/Hero.js
'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.animation = 'pop 0.6s ease-out forwards';
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.animation = 'bounce-in 0.6s ease-out forwards';
        ctaRef.current.style.opacity = '1';
      }
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 opacity-0"
          style={{
            color: '#FF2E2E',
            textShadow: '4px 4px 0 #FFD600, 8px 8px 0 #00E5FF, 12px 12px 0 rgba(0, 0, 0, 0.3)'
          }}
        >
        ARAMBH
        </h1>
        
        <div className="relative inline-block mb-12">
          <div className="speech-bubble inline-block">
            <p className="text-2xl md:text-3xl font-bold text-black">
              Stand-up Comedian - Poet - Professional Laugher
            </p>
          </div>
        </div>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0"
        >
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary text-black font-display font-bold text-xl rounded-lg hover:scale-105 hover:rotate-1 active:scale-95 transition-all duration-300 comic-shadow"
          >
            BOOK ME FOR SHOWS
          </button>
          
          <button
            onClick={() => document.getElementById('performances')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-4 border-accent text-accent font-display font-bold text-xl rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
          >
            WATCH PERFORMANCES
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce w-6 h-10 border-4 border-primary rounded-full flex justify-center">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}