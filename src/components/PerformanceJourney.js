import React from "react";

const cities = [
  {
    name: "Lucknow",
    image: "/lukcnow.jpeg",
    caption: "First outstation laughs",
  },
  {
    name: "Banaras",
    image: "/banaras.jpeg",
    caption: "Old city, fresh jokes",
  },
  {
    name: "Jaipur",
    image: "/jaipur.jpeg",
    caption: "New crowd, same timing",
  },
  {
    name: "Dehradun",
    image: "/dehradun.jpeg",
    caption: "Stories reaching the hills",
  },
];

export default function PerformanceJourney() {
  return (
    <section id="performance-journey" className="w-full bg-black py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white/90 text-center tracking-wide mb-3">
            Taking the Mic on the Road
          </h2>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-2xl mx-auto mb-8">
            Different cities, different crowds — same punchlines.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center justify-center">
          {cities.map((city, idx) => (
            <div
              key={city.name}
              className="flex flex-col items-center z-10 w-full group transition-transform duration-300 ease-out hover:scale-105"
            >
              <div className="w-56 h-56 rounded-2xl overflow-hidden bg-black/80 shadow-lg mb-6">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="font-bold text-white text-2xl mb-2 text-center">{city.name}</div>
              <div className="text-text-secondary text-lg text-center">{city.caption}</div>
            </div>
          ))}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 z-0" />
          <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 z-0" />
        </div>
      </div>
    </section>
  );
}
