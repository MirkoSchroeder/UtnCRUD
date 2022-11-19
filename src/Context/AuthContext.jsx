import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext()



const AuthProvider = ({children}) => {

    const navigate = useNavigate()
    const [login, setLogin] = useState(localStorage.getItem("login") || false)

    const handleLogin = () =>{
        setLogin(true)
        localStorage.setItem("login", true)
    }
    const handleLogout = () =>{
        setLogin(false)
        localStorage.removeItem("login")
        navigate("/login")
    }
    
    return(
        <AuthContext.Provider
            value={{login, handleLogin, handleLogout}} //todo lo que quiero acceder tengo que pasarlo dentro del value
        >
            {children} {/* imprime todo lo que esta dentro del Authprovider en App.js */}
        </AuthContext.Provider>
    )
}

export default AuthProvider