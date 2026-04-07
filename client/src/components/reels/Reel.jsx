import { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Reel({ reel, isActive, onVisible }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [mute, setMute] = useState(true);

  const handleSound = (e) => {
    e.stopPropagation();
    setMute((prev) => !prev);
  };

  const handleToggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setPaused(false);
      } else {
        video.pause();
        setPaused(true);
      }
    } catch (err) {
      console.warn("Play interrupted:", err);
    }

    setShowIcon(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowIcon(false), 700);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPaused(false))
          .catch((err) => {
            console.warn("Autoplay interrupted:", err);
          });
      }
    } else {
      video.pause();
      setPaused(true);
    }
  }, [isActive]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.6 }
    );

    const current = containerRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [onVisible]);

  return (
    <div ref={containerRef} onClick={handleToggle} className="relative h-full w-full snap-start bg-black overflow-hidden flex items-center justify-center">
      
      <video
        ref={videoRef}
        src={reel.video || reel}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={mute}
        playsInline
      />

      <div 
      className={`absolute transition-opacity duration-300
      ${showIcon ? "opacity-100" : "opacity-0"}`}>
        <div className='relative bg-black/40 p-4 rounded-full text-white'>
          <div onClick={handleSound} className='absolute bg-black/40 -ml-2 -top-20 mb-4 p-4 rounded-full text-white'>
            {mute ? <VolumeX size={40} /> : <Volume2 size={40} />}
          </div>
          {paused ? <Play size={60} /> : <Pause size={60} />}
        </div>
      </div>

    </div>
  );
}