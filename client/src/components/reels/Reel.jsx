import {useRef, useState} from 'react';
import {Play, Pause, Volume2} from 'lucide-react';

export default function Reel({ reel }) {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

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
  return (
    <div onClick={handleToggle} className="h-screen w-full snap-start bg-black flex items-center justify-center">
      
      <video
        ref={videoRef}
        src={reel}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      <div 
      className={`absolute transition-opacity duration-300
      ${showIcon?"opacity-100": "opacity-0"}`}>
        <div className='bg-black/40 p-4 rounded-full text-white'>
          {paused? <Play size={60} />: <Pause size={60} />}
        </div>
        <div className='bg-black/40 p-4 rounded-full text-white'>
          {paused? <Play size={60} />: <Pause size={60} />}
        </div>
      </div>

    </div>
  );
}