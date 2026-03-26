import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Signin, Signup, ReelsPage, Welcome, StoresPage } from "../pages";
import Logout from "../pages/auth/Logout";
import Layout from "../pages/Layout";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import StoreShowcase from "../pages/general/StoreShowcase";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/customer" element={<Signup partner={false} />} />
        <Route path="/signup/food-partner" element={<Signup partner={true} />}/>
        
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoutes/>}>
          <Route path="stores" element={<StoresPage/>} />
          <Route path="stores/:id" element={<StoreShowcase />} />
          <Route path="reels" element={<ReelsPage/>} /> 
          <Route path="logout" element={<Logout/>} /> 
        </Route> 
      </Routes>
    </Router>
  )
}

export default AppRoutes