import AuthContext from "./authContext";
import { useState, useEffect } from "react";
import axios from 'axios';


function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    async function fetchUser(){
        try{
            const res = await axios.get(import.meta.VITE_BACKEND+"/users/get-user", {
                withCredentials: true
            });
            setUser(res.data.user);
        } catch (err) {
            setUser(null);
        }
    }
    useEffect(()=>{
        fetchUser();
    }, [])
    return (
        <AuthContextProvider value={{
            
        }}>
            {children}
        </AuthContextProvider>
    )
}

export default AuthContextProvider