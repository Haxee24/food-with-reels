import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/auth/authContext";
import { Navbar } from "../components/base";

export default function ProtectedRoutes({role}) {
    const { user, loading } = useAuth();
    if (loading) {
        console.log(user);
        return <p>Loading...</p>;
    }
    if (!user){
        return <Navigate to={"/welcome"} replace/>
    }
    if (role && user.role !== role){
        return <Navigate to={"/"} replace/>
    }
    return (
        <>
            <Outlet/>
        </>
    )
}