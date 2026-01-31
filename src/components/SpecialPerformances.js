import React from "react";

const images = [
  {
    src: "/solo.jpeg",
    caption: "On stage",
  },
  {
    src: "/bhagyashree.jpeg",
    caption: "With Bhagyashree Ma’am",
  },
  {
    src: "/raza murad.jpeg",
    caption: "With Raza Murad Sir",
  },
  {
    src: "/hansraj.jpeg",
    caption: "With Hansraj Hans Sir",
  },
];

export default function SpecialPerformances() {
  return (
    <section id="special-performances" className="w-full bg-black py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white/90 text-center tracking-wide mb-3">
            Special Performances
          </h2>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-2xl mx-auto mb-8">
            Moments shared with legends who shaped generations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {images.map((img) => (
            <div key={img.src} className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg bg-black/80 group transition-transform duration-500 hover:scale-105">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 px-4 text-white text-sm text-center font-medium tracking-wide">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
