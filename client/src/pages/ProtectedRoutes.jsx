import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/auth/authContext";

export default function ProtectedRoutes() {
    const { user: isAuthenticated } = useAuth();
    if (!isAuthenticated){
        return <Navigate to={"/"} />
    }
    return (
        <>
            <Outlet/>
            <Navbar/>
        </>
    )
}