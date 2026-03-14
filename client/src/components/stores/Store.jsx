import { Link } from "react-router";
import { Store } from "lucide-react";

export default function FoodRestaurant({ store }) {
  return (
    <Link
      to={`/stores/${store._id}`}
      className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900 transition"
    >

      {/* Store Icon / Image */}
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-500">
        <Store size={22} />
      </div>

      {/* Store Info */}
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 dark:text-white">
          {store.name}
        </span>

        <span className="text-sm text-gray-600 dark:text-neutral-400 line-clamp-2">
          {store.description || "Delicious food and amazing flavors."}
        </span>
      </div>

    </Link>
  );
}