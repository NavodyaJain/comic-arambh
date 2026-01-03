// app/page.js
'use client';

import { useEffect } from 'react';
import ParallaxBackground from '@/components/ParallaxBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PunchlineBanners from '@/components/PunchlineBanners';
import Performances from '@/components/Performances';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PunchlineBanners />
        <Performances />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}