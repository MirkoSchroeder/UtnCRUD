import React from "react";
import { useState } from "react";
import "./Login.css"
import firebase from "../../db/firebase"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {

    const [form, setForm] = useState({email:"", password:""})
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let email = form.email
        let password = form.password        
        await firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log("usuario logeado", data.user.uid);
            context.handleLogin()
            navigate("/")
        })
        .catch((error) => {
            console.log(error, "error");
        })
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setForm({...form, [name]:value})
      }
      
    return (
        <div className="bg-img">
            <div className="container-text">
                <h1 className="text-name">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="container">

            <label>Email</label>
            <input type="email" onChange={handleChange} name="email" />

            <label>Contrasena</label>
            <input type="password" onChange={handleChange} name="password" />

                <button type="submit" className="btn">Iniciar Sesion</button>
            </form>
        </div>
    )
}


export default Login