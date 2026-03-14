import Store from '../../components/stores/Store'
import axios from 'axios';
import { useEffect, useState } from 'react';

function StoresPage() {

  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try{
        const res = await axios.get(import.meta.env.VITE_BACKEND+"/stores");
        setStores(res.data);
    } catch(error) {
        console.error(error);
    }
  };

  return (
    <div className="pb-20">

      {stores.map((store) => (
        <Store key={store._id} store={store} />
      ))}

    </div>
  );
}

export default StoresPage;