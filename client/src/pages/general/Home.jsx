import { useAuth } from "../../context/auth/authContext";

function Home() {
    const { user } = useAuth();
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
    <div>Home</div>
  )
}

export default Home