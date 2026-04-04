import { useEffect, useState } from "react";
import axios from "axios";
import Store from '../../components/stores/Store';

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const inputStyle =
        "w-80 m-4 px-4 py-2 border rounded-lg bg-white dark:bg-neutral-950 text-gray-800 dark:text-white border-gray-300 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500";

    useEffect(() => {
        fetchStores();
    }, [query]);

    const fetchStores = async () => {
        try {
        const res = await axios.get("http://localhost:3000/api/stores/all");
        const allstores = res.data.data;
        const queriedStores = allstores.filter(store => store.storename.toLowerCase().includes(query.toLowerCase()));
        setStores(queriedStores);
        } catch (error) {
            console.error("Failed to load stores:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">
        {/* Page Header */}
        <div className="p-4 border-b border-gray-200 dark:border-neutral-800">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Search
            </h1>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
            Discover food places around you
            </p>
        </div>

        {/* Content */}
        <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            <input className={inputStyle} value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
            {query === ""? (
                <div className="p-6 text-center text-gray-600 dark:text-neutral-400">
                    Start typing to search for stores...
                </div>
            ) : null}
            {query !== "" ? (
                <>
                                {loading && (
                    <div className="p-6 text-center text-gray-600 dark:text-neutral-400">
                        Loading stores...
                    </div>
                    )}

                {!loading && stores.length === 0 && (
                <div className="p-6 text-center text-gray-600 dark:text-neutral-400">
                    No stores available.
                </div>
                )}

                {!loading &&
                stores.map((store) => (
                    <Store key={store._id} store={store} />
                ))}
                </>
                ) : null}
           
        </div>

        </div>
    );
}