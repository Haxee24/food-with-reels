import { Link } from "react-router";
import { Store } from "lucide-react";

export default function Store({ store }) {
  return (
    <Link
      to={`/stores/${store._id}`}
      className="block rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md transition"
    >
      
      {/* Image */}
      <div className="h-40 w-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
        {store.image ? (
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Store size={40} className="text-orange-500" />
        )}
      </div>

      {/* Content */}
      <div className="p-4">

        <h3 className="font-semibold text-gray-900 dark:text-white">
          {store.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1 line-clamp-2">
          {store.description || "Delicious food and great flavors."}
        </p>

      </div>

    </Link>
  );
}