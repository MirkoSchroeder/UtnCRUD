import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "../../db/firebase"


const ProductDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()    
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getProduct(id)
    }, [id])

    const getProduct = async (id) => {
      const querySnapchot = await firebase.firestore.doc(`productos/${id}`)
      .get()
      const data = querySnapchot.data()
      setProducto(data)
      setIsLoading(false)
    }

    const onBuySubmit = () => {
      navigate(`/compra/${id}`)
    }
    
    return (
        <>
        {
          isLoading &&
          <div>
            <h2>CARGANDO PRODUCTOS</h2>
          </div>
        }
        {
          !isLoading &&
          <>
          <img className="wyh" src={producto.image} alt="product" />
          <h1>{producto.nombre}</h1>
          <h2>{producto.informacion}</h2>
          <p>${producto.precio}</p>
          <button onClick={onBuySubmit}>Comprar</button>
          </>
          
        }
        </>
    )
}


export default ProductDetail