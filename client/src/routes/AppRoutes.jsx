import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ReelForm, MyStore } from "../pages";
import { SearchPage, ReelsPage, Welcome, StoresPage, StoreShowcase } from "../pages";
import { Signin, Signup, Logout } from "../pages";
import Layout from "../pages/Layout";
import Home from "../pages/general/Home";
import ProtectedRoutes from "../pages/ProtectedRoutes";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/customer" element={<Signup partner={false} />} />
        <Route path="/signup/food-partner" element={<Signup partner={true} />}/>
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes/>}>
          <Route element={<Layout/>}>
            <Route element={<ProtectedRoutes role={"customer"}/>} >
              <Route path="stores" element={<StoresPage/>} />
              <Route path="stores/:id" element={<StoreShowcase />} />
              <Route path="reels" element={<ReelsPage/>} /> 
              <Route path="search" element={<SearchPage/>} />
            </Route>
            <Route element={<ProtectedRoutes role={"partner"}/>} >
              <Route path="add-reel" element={<ReelForm/>} />
              <Route path="my-store" element={<MyStore />} />
              <Route path="reels" element={<ReelsPage/>} /> 
              <Route path="search" element={<SearchPage/>} />
            </Route>
            <Route path="logout" element={<Logout/>} /> 
          </Route>
        </Route> 
      </Routes>
    </Router>
  )
}

export default AppRoutes