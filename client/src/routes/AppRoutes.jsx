import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Signin, Signup, ReelsPage, Welcome, StoresPage } from "../pages";
import Layout from "../pages/Layout";
import ProtectedRoutes from "../pages/ProtectedRoutes";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route index element={<Welcome/>} />
          {/* auth routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup/customer" element={<Signup partner={false} />} />
          <Route path="/signup/food-partner" element={<Signup partner={true} />} />
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoutes/>}>
          {/* Customer Routes */}
          <Route path="stores" element={<StoresPage/>} />
          <Route path="reels" element={<ReelsPage/>} /> 
          {/* Partner Routes */}
        </Route> 
      </Routes>
    </Router>
  )
}

export default AppRoutes