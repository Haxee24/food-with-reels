import { Routes, Route } from "react-router";
import { Home, Signin, Signup } from "./pages/index";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/login" element={<Signin/>} />
      </Route>
    </Routes>
  )
}