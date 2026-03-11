import Reel from "../../components/reels/Reel";

function ReelsPage() {
  const reels = [
    "example1.mp4",
    "example2.mp4",
    "example3.mp4"
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {reels.map((video, index) => (
        <Reel key={index} reel={video} />
      ))}
    </div>
  )
}

export default ReelsPage;