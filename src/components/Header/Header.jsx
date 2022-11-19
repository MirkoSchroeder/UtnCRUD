import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import "./Header.css"

const Header = () => {

    const context = useContext(AuthContext)

    return (
        <ul className="header">
            {
                !context.login &&
                <>
                    <li><Link className="style" to="/login" element={<Login />}>Login</Link></li>
                    <li><Link className="style" to="/register" element={<Register/>}>Register</Link></li>
                </>
            }
            {
                context.login &&
                <>
                <li><Link className="style" to="/" element={<Home />}>Home</Link></li>
                <button onClick={context.handleLogout}>Cerrar Sesion</button>
                </>
            }
            
        </ul>
    )
}


export default Header