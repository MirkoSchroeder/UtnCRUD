import React from "react";
import { useState } from "react";
import firebase from "../../db/firebase"

const AddProduct = () => {

    const [producto, setProducto] = useState({nombre:"", informacion: "", precio:"", img:""})

    const handleSubmit = async (e) => {
        await firebase.firestore.collection("productos")
        .add({
            nombre: producto.nombre,
            informacion: producto.informacion,
            precio: producto.precio,
            image: producto.img,
        })
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setProducto({
            ...producto, [name] : value})
    }

    console.log(producto);

    return(
        <div>
            <div className="container-text">
                <h1 className="text-name">Agregar Producto</h1>
            </div>
            <form onSubmit={handleSubmit} className="container">

                <label>Nombre</label>
                <input type="text" name="nombre" onChange={handleChange}/>

                <label>Informacion</label>
                <input type="text" name="informacion" onChange={handleChange} />
                
                <label>Precio</label>
                <input type="number" name="precio" onChange={handleChange} />
                
                <label>Imagen</label>
                <input type="text" name="img" onChange={handleChange} />

                <button type="submit" className="btn">Agregar producto</button>
            </form>
        </div>
    )
}

export default AddProduct