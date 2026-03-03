import { BrowserRouter as Router, Routes, Route } from "react-router";

import React from 'react'
import { About, Signin, Signup } from "../pages";

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<About/>}/>

            <Route path="/user/login" element={<Signin/>}/>

            <Route path="/customer/signup" element={<Signup partner={false}/>}/>
            <Route path="/food-partner/signup" element={<Signup partner={true}/>}/>

        </Routes>
    </Router>
  )
}

export default AppRoutes