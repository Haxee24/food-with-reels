import { BrowserRouter as Router, Routes, Route } from "react-router";
import { About, Signin, Signup } from "../pages";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/customer" element={<Signup partner={false} />} />
        <Route path="/signup/food-partner" element={<Signup partner={true} />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes