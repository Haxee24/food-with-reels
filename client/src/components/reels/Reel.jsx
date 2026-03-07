import {useRef} from 'react';

export default function Reel({ reel }) {
  const videoRef = useRef(null);
  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
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

    </div>
  );
}