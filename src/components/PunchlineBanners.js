'use client';

import { useEffect, useState } from 'react';

export default function PunchlineBanners() {
  const punchlines = [
    "Uthata hu kalam aur inqilab likhta hu ; abhi naukri pr hu yaro chalo thodi der baat likhta hu",
    "Mei gulalb bana rha hu ; uske dil me na sahi uski almari ki kitab me daba rha "
  ];

  // Removed shayariBg for plain black background

  const reactions = ['HAHAHA', 'WAAH WAAH'];

  const [active, setActive] = useState(false);
  const [punchlineIndex, setPunchlineIndex] = useState(0);

  useEffect(() => {
    setActive(true);
    const interval = setInterval(() => {
      setPunchlineIndex((prev) => (prev + 1) % punchlines.length);
    }, 4000); // Change punchline every 4 seconds
    return () => clearInterval(interval);
  }, [punchlines.length]);

  return (
    <section className="relative py-32 overflow-hidden bg-[#0b0b0b] text-white">
      {/* 🔹 Grain + Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90" />
      <div className="absolute inset-0 noise-overlay opacity-20" />

      {/* Black background only, no shayari text */}

      {/* 🔹 Main Punchline */}
      <div className="relative z-10 text-center px-6">
        <div
          className={`inline-block px-10 py-8 bg-white text-black font-bold text-2xl md:text-3xl comic-border transition-all duration-700 ${
            active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <p className="whitespace-pre-line">
            {punchlines[punchlineIndex]}
          </p>
        </div>
      </div>

      {/* 🔹 Infinite Reaction Marquee */}
      <div className="relative z-10 mt-20 overflow-hidden">
        <div className="flex w-max animate-marquee-infinite">
          {[...reactions, ...reactions, ...reactions, ...reactions].map(
            (word, i) => (
              <span
                key={i}
                className="mx-10 text-4xl md:text-5xl font-display font-extrabold text-accent rotate-[-6deg]"
              >
                {word}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
