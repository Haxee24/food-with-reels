import { Navigate } from "react-router";
import axios from "axios";
import { useAuth } from "../../context/auth/authContext";

function Logout() {
    const {fetchUser} = useAuth();
    async function logoutUser(){
        await axios.post(import.meta.env.VITE_BACKEND+"/user/logout");
        await fetchUser();
    }
    logoutUser();
  return (
    <Navigate to={"/welcome"} />
  )
}

export default Logout