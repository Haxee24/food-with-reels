import AppRoutes from "./routes/AppRoutes";
import AuthContextProvider from "./context/auth/authContextProvider";

export default function App() {

  return (
    <div className="phone-container">
      <div className="phone-screen">
        <AuthContextProvider> 
          <AppRoutes />
        </AuthContextProvider>
      </div>
    </div>
  )
}