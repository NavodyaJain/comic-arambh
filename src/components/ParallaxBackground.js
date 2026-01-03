// components/ParallaxBackground.js
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParallaxBackground() {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  // Generate random lines ONLY on client after mount
  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 100 + 50}px`,
      rotate: `${Math.random() * 360}deg`,
    }));
    setLines(generated);
  }, []);

  // Parallax scroll
  useEffect(() => {
    const handleParallax = () => {
      if (!containerRef.current) return;

      const scrolled = window.scrollY;
      const layers = containerRef.current.children;

      Array.from(layers).forEach((layer, index) => {
        const speed = 0.2 + index * 0.1;
        layer.style.transform = `translateY(${-scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    handleParallax();

    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 halftone-bg opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-primary/20 -rotate-12" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-accent/20 rotate-12" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border-4 border-secondary/20" />

      <div className="absolute inset-0">
        {lines.map((style, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
            style={{
              top: style.top,
              left: style.left,
              width: style.width,
              transform: `rotate(${style.rotate})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
