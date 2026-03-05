import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Signin, Signup, Home } from "../pages";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* auth routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/customer" element={<Signup partner={false} />} />
        <Route path="/signup/food-partner" element={<Signup partner={true} />} />

        {/* general routes */}
        <Route index element={<Home/>} />        
      </Routes>
    </Router>
  )
}

export default AppRoutes