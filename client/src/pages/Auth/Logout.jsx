import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth/authContext";

function Logout() {
  const { fetchUser } = useAuth();
  const [done, setDone] = useState(false);

  useEffect(() => {
    async function logoutUser() {
      try {
        await axios.post(
          import.meta.env.VITE_BACKEND + "/users/logout",
          {},
          { withCredentials: true }
        );

        await fetchUser();
      } catch (err) {
        console.error(err);
      } finally {
        setDone(true);
      }
    }

    logoutUser();
  }, []);

  if (!done) return <p>Logging out...</p>;

  return <Navigate to="/welcome" replace />;
}

export default Logout;