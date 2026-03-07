import { useRef, useEffect } from "react";

export default function Reel({ reel }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen w-full snap-start bg-black flex items-center justify-center">

      {/* Video */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute bottom-24 left-4 text-white max-w-[70%]">
        <p className="font-semibold">{reel.storeName}</p>
        <p className="text-sm opacity-90">{reel.caption}</p>
      </div>

      {/* Right Side Actions */}
      <div className="absolute bottom-24 right-4 flex flex-col items-center gap-6 text-white">

        <button className="flex flex-col items-center text-sm">
          ❤️
          <span>{reel.likes || 0}</span>
        </button>

        <button className="flex flex-col items-center text-sm">
          💬
          <span>{reel.comments || 0}</span>
        </button>

        <button className="flex flex-col items-center text-sm">
          ↗
        </button>

      </div>

    </div>
  );
}