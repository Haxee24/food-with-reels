import { useAuth } from "../../context/auth/authContext";
import { Navigate } from "react-router";

function Home() {
    const { user, loading } = useAuth();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!user) {
        return <Navigate to={"/welcome"} />
    }
    if (user.role === "partner") {
        return <Navigate to={"/dashboard"} />
    }
    if (user.role === "customer") {
        return <Navigate to={"/stores"} />
    }
    return (
        <Navigate to={"/welcome"} />
  )
}

export default Home