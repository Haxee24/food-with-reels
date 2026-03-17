import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";

export default function App() {

  return (
    <div className="phone-container">
      <div className="phone-screen">
        <AppRoutes />
      </div>
    </div>
  )
}