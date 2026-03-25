import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import FoodItemCard from "../../components/stores/FoodItem";

export default function StoreShowcase() {
  const { storeId } = useParams();

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoods();
  }, [storeId]);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/stores/${storeId}/foods`
      );
      setFoods(res.data);
    } catch (error) {
      console.error("Failed to load food items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);

    // later you can save to localStorage / context / redux
    // Example:
    // addToCart(item);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-neutral-800">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Food Items
        </h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          Explore the full menu for this store
        </p>
      </div>

      {/* Content */}
      <div className="p-4">
        {loading && (
          <div className="text-center text-gray-600 dark:text-neutral-400 py-10">
            Loading food items...
          </div>
        )}

        {!loading && foods.length === 0 && (
          <div className="text-center text-gray-600 dark:text-neutral-400 py-10">
            No food items available for this store.
          </div>
        )}

        {!loading && foods.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {foods.map((item) => (
              <FoodItemCard
                key={item._id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}