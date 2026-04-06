import Reel from "../../../components/reels/Reel";
import { useState } from "react";

function ReelsPage() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReels = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/customers/new-reels", { withCredentials: true });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full overflow-y-scroll snap-y snap-mandatory bg-black">
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