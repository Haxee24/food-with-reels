import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/auth/authContext";
import { Navbar } from "../components/base";

export default function ProtectedRoutes() {
    const { user, loading } = useAuth();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!user){
        return <Navigate to={"/welcome"} replace/>
    }
    return (
        <>
            <Outlet/>
            <Navbar/>
        </>
    )
}