import { useRef, useEffect, useState } from "react";

export default function MomentsWithCrowd() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <section className="w-full bg-[#18171c] py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Moments With the Crowd</h2>
          <p className="text-lg text-text-secondary">When jokes land, laughs travel faster than the mic.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/aud 2.jpeg"
              alt="Crowd reaction"
              className="rounded-xl w-full max-w-xs object-cover transition-transform duration-300 hover:scale-105"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <video
              ref={videoRef}
              src="/aud1.mp4"
              className="rounded-xl w-full max-w-xs object-cover transition-transform duration-300 hover:scale-105"
              style={{ aspectRatio: "3/4", height: '100%' }}
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/aud 3.jpeg"
              alt="Performance moment"
              className="rounded-xl w-full max-w-xs object-cover transition-transform duration-300 hover:scale-105"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
