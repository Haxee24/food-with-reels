import { Link, Navigate } from "react-router";
import { Utensils, PlayCircle } from "lucide-react";

function Welcome(){
  const user = false;
  if (user){
    return <Navigate to={"/reels"}/>
  }
    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-black text-center">

      {/* Logo / Icon */}
      <div className="mb-6 text-orange-500">
        <Utensils size={64} />
      </div>

      {/* App Name */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        FoodReels
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-gray-600 dark:text-neutral-400 max-w-sm">
        Discover amazing food through short videos.  
        Find restaurants, watch reels, and explore flavors near you.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">

        <Link
          to="/signup/customer"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium"
        >
          Create Account
        </Link>

        <Link
          to="/signin"
          className="border border-gray-300 dark:border-neutral-700 py-3 rounded-lg font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-900"
        >
          Sign In
        </Link>

        <Link
          to="/reels"
          className="flex items-center justify-center gap-2 text-orange-500 font-medium mt-2"
        >
          <PlayCircle size={20} />
          Explore Reels
        </Link>

      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-gray-400">
        Discover food visually 🍜
      </p>

    </div>
    )
}

export default Welcome;