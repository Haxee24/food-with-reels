import Reel from "../../../components/reels/Reel";
import { useState, useEffect } from "react";
import axios from "axios";

function ReelsPage() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReels = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_BACKEND + "/customer/new-reels", { withCredentials: true });
      const retrieved = await  Promise.all(res.data.data.map(async (reel) => {
        const store = await axios.get(import.meta.env.VITE_BACKEND + "/stores/" + reel.store);
        return {
          ...reel,
          store: store.data.data
        }
      }));
      setReels(retrieved);
    } catch (err) {
      console.error("Error fetching reels:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReels();
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-600 dark:text-neutral-400">Loading reels...</p>
      </div>
    );
  }

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