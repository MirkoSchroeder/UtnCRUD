import React from "react";
import "./Register.css"
import { useState } from "react";
import firebase from "../../db/firebase"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [form, setForm] = useState({nombre: "", apellido: "", email:"", password:""})
    const navigate = useNavigate()
    
    const onSubmit = (e) => {
        e.preventDefault()
        const email = form.email;
        const password = form.password
        
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then(async(data) => {
            console.log("Usuario creado", data.user.uid);
            if(data.user.uid) { //auth de si se crea un uid
                await firebase.firestore.collection("users")
                .add({
                    nombre: form.nombre,
                    apellido: form.apellido,
                    userId: data.user.uid
                })
                navigate("/login")
            }
        })
        .catch((error) => {
            console.log("Error", error);
        })
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        console.log(value, name);

        setForm({
            ...form, [name] : value})
        
    }

    return (
        <div className="bg-img">
            <div className="container-text">
                <h1 className="text-name">REGISTER</h1>
            </div>

            <form onSubmit={onSubmit} className="container">

                <label>Nombre</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />

                <label>Apellido</label>
                <input type="text" value={form.apellido} onChange={handleChange} name="apellido" />

                <label>Email</label>
                <input type="email" value={form.email} onChange={handleChange} name="email" />

                <label>Contrasena</label>
                <input type="password" value={form.password} onChange={handleChange} name="password" />

                <button type="submit" className="btn">Registrarse</button>
            </form>
        </div>
    )
}


export default Register