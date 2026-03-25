import { Plus, UtensilsCrossed } from "lucide-react";

export default function FoodItemCard({ item, onAddToCart }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="aspect-square w-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <UtensilsCrossed size={36} className="text-orange-500" />
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
            {item.name}
          </h3>
          <span className="shrink-0 text-sm font-semibold text-orange-500">
            ₹{item.price}
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 line-clamp-2 min-h-[40px]">
          {item.description || "Freshly prepared and delicious."}
        </p>

        <button
          onClick={() => onAddToCart?.(item)}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-2 font-medium transition"
        >
          <Plus size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}