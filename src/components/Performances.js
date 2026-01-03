'use client';

import { useState } from 'react';

const performances = [
  {
    id: 1,
    title: 'College Fest Madness',
    type: 'College Festival',
    description: 'Roaring laughter from 2000+ students',
    highlight: 'Most Viral Performance 2023',
    color: 'border-primary',
    image: '/comic-3.png'
  },
  {
    id: 2,
    title: 'Corporate Comedy Night',
    type: 'Corporate Event',
    description: 'Clean, witty humor for professionals',
    highlight: 'Client Rating: 4.9/5',
    color: 'border-accent',
    image: '/comic-4.png'
  },
  {
    id: 3,
    title: 'Poetry Slam',
    type: 'Shayari Evening',
    description: 'Heartfelt verses with comic timing',
    highlight: 'Audience Choice Award',
    color: 'border-secondary',
    image: '/comic-5.png'
  },
  {
    id: 4,
    title: 'Open Mic Champion',
    type: 'Competition',
    description: 'Weekly comedy battle victories',
    highlight: '3-Month Winning Streak',
    color: 'border-primary',
    image: '/comic-6.png'
  }
];

export default function Performances() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="performances" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl font-bold text-primary text-center mb-4">
          Stage Highlights
        </h2>

        <p className="text-text-secondary text-center text-lg mb-12 max-w-2xl mx-auto">
          From intimate gatherings to massive festivals, every show is a unique comic adventure
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performances.map((perf) => (
            <div
              key={perf.id}
              className={`relative group cursor-pointer ${perf.color} p-1 rounded-lg transition-all duration-500 ${
                hoveredCard === perf.id ? '-translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(perf.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-black rounded-lg overflow-hidden h-full flex flex-col">
                
                {/* Image Section (Square) */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={perf.image}
                    alt={perf.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-3 w-fit">
                    {perf.type}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {perf.title}
                  </h3>

                  <p className="text-text-secondary mb-4">
                    {perf.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-text-secondary/20">
                    <span className="text-accent font-bold">
                      {perf.highlight}
                    </span>
                  </div>
                </div>

                {/* Comic Border Hover */}
                <div
                  className={`absolute inset-0 border-2 ${perf.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />
              </div>

              {/* Tilt Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${
                  hoveredCard === perf.id ? 'rotate-2' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
