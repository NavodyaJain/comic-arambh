// components/Gallery.js
'use client';

import { useEffect, useRef } from 'react';

const imageFiles = ['/comic-2.png','/comic-3.png','/comic-4.png','/comic-5.png','/comic-6.png'];

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  aspect: i % 3 === 0 ? 'square' : i % 3 === 1 ? 'portrait' : 'landscape',
  category: i % 4 === 0 ? 'Stage' : i % 4 === 1 ? 'Audience' : i % 4 === 2 ? 'Backstage' : 'Events',
  image: imageFiles[i % imageFiles.length]
}));

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = galleryRef.current?.querySelectorAll('.gallery-item');
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl font-bold text-primary text-center mb-4">
          Comic Panels Wall
        </h2>
        <p className="text-text-secondary text-center text-lg mb-12 max-w-2xl mx-auto">
          Moments of laughter, applause, and everything in between
        </p>

        <div ref={galleryRef} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="gallery-item break-inside-avoid opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: `${img.id * 100}ms` }}
            >
              <div className="relative group cursor-pointer mb-4">
                <div className={`comic-border overflow-hidden ${
                  img.aspect === 'portrait' ? 'aspect-[3/4]' : 
                  img.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'
                }`}>
                  <img
                    src={img.image}
                    alt={`Show ${img.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">{img.category}</span>
                      <span className="text-sm text-accent">SHOW {img.id}</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-transparent border-4 border-primary text-primary font-display font-bold text-xl rounded-lg hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105">
            VIEW ALL MEMORIES
          </button>
        </div>
      </div>
    </section>
  );
}