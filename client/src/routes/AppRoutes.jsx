import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Signin, Signup, Home } from "../pages";
import Layout from "../pages/Layout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* auth routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup/customer" element={<Signup partner={false} />} />
          <Route path="/signup/food-partner" element={<Signup partner={true} />} />

          {/* general routes */}
          <Route index element={<Home/>} />         
        </Route> 
      </Routes>
    </Router>
  )
}

export default AppRoutes