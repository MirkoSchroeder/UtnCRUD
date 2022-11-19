import React, {useEffect} from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "../../db/firebase"

const UpdateProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [productoUpdated, setProductoUpdated] = useState({})

    useEffect(() => {
        getProduct(id)
    }, [id])

    const getProduct = async (id) => {
        const querySnapchot = await firebase.firestore.doc(`productos/${id}`)
        .get()
        const data = querySnapchot.data()
        setProductoUpdated(data)
    }

    
    const updateProd = async (id, payload) => {
        return await firebase.firestore.doc(`productos/${id}`)
        .set(payload)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        updateProd(id, productoUpdated)
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setProductoUpdated({
            ...productoUpdated, [name] : value})
    }

    const handleDelete = () => {
        deleteProduct(id);
        navigate("/")
    }

    const deleteProduct = async (id) => {
        return await firebase.firestore.doc(`productos/${id}`)
        .delete(id)
    }

    console.log(productoUpdated);

    return(
        <div>
            <button onClick={handleDelete}>Eliminar producto</button>
            <div className="container-text">
                <h1 className="text-name">Actualizar Producto</h1>
            </div>
            <form onSubmit={handleSubmit} className="container">

                <label>Nombre</label>
                <input type="text" name="nombre" value={productoUpdated.nombre} onChange={handleChange} />

                <label>Informacion</label>
                <input type="text" name="informacion" value={productoUpdated.informacion} onChange={handleChange} />
                
                <label>Precio</label>
                <input type="number" name="precio" value={productoUpdated.precio} onChange={handleChange} />
                
                <label>Imagen</label>
                <input type="text" name="image" value={productoUpdated.image} onChange={handleChange} />

                <button type="submit" className="btn">Actualizar producto</button>
            </form>
        </div>
    )
}

export default UpdateProduct