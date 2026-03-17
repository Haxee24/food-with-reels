import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";

export default function App() {

  useEffect(()=>{
    if (window.innerWidth > 768) {
      document.body.classList.add("force-mobile");
    }
  }, []);

  return (
    <AppRoutes />
  )
}