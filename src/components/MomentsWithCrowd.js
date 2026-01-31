import { useRef, useEffect, useState } from "react";
// Simple mobile detection
function isMobile() {
  if (typeof window === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(window.navigator.userAgent);
}

export default function MomentsWithCrowd() {
  // ...existing code...
  const [isMuted, setIsMuted] = useState(true); // for desktop unmute button
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(isMobile());

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
    // Only auto-play/pause for desktop (no play button)
    if (videoRef.current && !showPlayButton) {
      videoRef.current.muted = isMuted;
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
    // On mobile, do not auto-play
  }, [isVisible, showPlayButton, isMuted]);

  // Play with sound when play button is clicked
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
      setShowPlayButton(false);
    }
  };

  // Desktop unmute button handler
  const handleUnmuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

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
          <div className="w-full md:w-1/3 flex justify-center relative">
            <video
              ref={videoRef}
              src="/aud1.mp4"
              className="rounded-xl w-full max-w-xs object-cover transition-transform duration-300 hover:scale-105"
              style={{ aspectRatio: "3/4", height: '100%' }}
              loop
              playsInline
              preload="auto"
              autoPlay={!showPlayButton}
              muted={showPlayButton || isMuted}
            />
            {showPlayButton && (
              <button
                onClick={handlePlayClick}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  cursor: "pointer",
                  zIndex: 2,
                }}
                aria-label="Play video"
              >
                ▶
              </button>
            )}
            {/* Desktop unmute button */}
            {!showPlayButton && isMuted && (
              <button
                onClick={handleUnmuteClick}
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  zIndex: 2,
                }}
                aria-label="Unmute video"
              >
                🔊 Unmute
              </button>
            )}
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
