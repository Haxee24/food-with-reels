import Reel from "../../components/reels/Reel";
import { useState } from "react";

function ReelsPage() {
  const reels = [
    "example1.mp4",
    "example2.mp4",
    "example3.mp4"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {reels.map((video, index) => (
        <Reel 
        key={index}
        reel={video}
        isActive={index==activeIndex}
        onVisible={()=> setActiveIndex(index)}
        />
      ))}
    </div>
  )
}

export default ReelsPage;