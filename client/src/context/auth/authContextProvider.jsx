import AuthContext from "./authContext";
import { useState, useEffect } from "react";


function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);

    return (
        <AuthContextProvider value={{
            
        }}>
            {children}
        </AuthContextProvider>
    )
}

export default AuthContextProvider