import AuthContext from "./authContext";
import { useState, useEffect } from "react";
import axios from 'axios';


function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchUser(){
        try{
            const res = await axios.get(import.meta.env.VITE_BACKEND+"/users/get-user", {
                withCredentials: true
            });
            console.log("axios complete")
            setUser(res.data.user);
        } catch (err) {
            setUser(null);
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchUser();
    }, [])
    return (
        <AuthContext.Provider value={{
            user,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider