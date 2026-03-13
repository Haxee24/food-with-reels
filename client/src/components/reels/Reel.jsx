import {useRef, useEffect, useState} from 'react';
import {Play, Pause, Volume2, VolumeX} from 'lucide-react';

export default function Reel({ reel, isActive, onVisible }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [mute, setMute] = useState(true);

  const handleSound = () => {
    setMute((prev)=>!prev);
  }

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }

    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 700);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.currentTime = 0;
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }, [isActive]);

    // detect when reel becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div ref={containerRef} onClick={handleToggle} className="relative h-screen w-full snap-start bg-black flex items-center justify-center">
      
      <video
        ref={videoRef}
        src={reel}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted={mute}
        playsInline
      />

      <div 
      className={`absolute transition-opacity duration-300
      ${showIcon?"opacity-100": "opacity-0"}`}>
        <div className='relative bg-black/40 p-4 rounded-full text-white'>
          <div onClick={handleSound} className='absolute bg-black/40 -ml-2 -top-20 mb-4 p-4 rounded-full text-white'>
            {mute? <VolumeX size={40} />: <Volume2 size={40} />}
          </div>
          {paused? <Play size={60} />: <Pause size={60} />}
        </div>
      </div>

    </div>
  );
}