export default function Reel({ reel }) {
  return (
    <div className="h-screen w-full snap-start bg-black flex items-center justify-center">
      
      <video
        src={reel}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls
      />

    </div>
  );
}