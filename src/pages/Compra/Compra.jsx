import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "../../db/firebase"
import "./Compra.css"

const Compra = () => {
    const {id} = useParams()
    const navigate = useNavigate()    
    const [producto, setProducto] = useState({})
    const [comprado, setComprado] = useState(false)
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

    const onBuySubmit =  () => {
      setComprado(true)
      setTimeout(() => {
        navigate("/")
      }, 5000);

    }
    
    return (
      <div className="center">
        <div className="divCompra">
          <h1>Compra Final</h1>
          {
            isLoading &&
            <div>
              <h2>CARGANDO PRODUCTO</h2>
            </div>
          }
          {
            !isLoading &&
            <>
            <img className="wyh" src={producto.image} alt="product" />
            <h1>{producto.nombre}</h1>
            <p className="price">${producto.precio}</p>
            <button onClick={onBuySubmit}>Confirmar compra</button>
            </>
          }
        </div>
        {
          comprado &&
          <div>
            <h1>Gracias por su compra!!</h1>
            <p>Aguarde unos segundos y sera redirigido a la pagina principal</p>
          </div>
        }
      </div>
    )
}


export default Compra