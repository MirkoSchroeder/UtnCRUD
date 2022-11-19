import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/Products/Products";
import AddProduct from "../AddProduct/AddProduct";
import firebase from "../../db/firebase"
import "./Home.css"
import Spinner from 'react-bootstrap/Spinner';


const Home = () => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      getProducts()
    }, [])

    const getProducts = async () => {
      const querySnapchot = await firebase.firestore.collection("productos")
      .get()
      .then((res) => {
        const docs = res.docs
        return docs
      })
    setProductos(querySnapchot)
    setIsLoading(false)
    }

    console.log(productos);
    return (
        <div className="Home">
            <h1>Lista de productos</h1>
            <Link to="/addProduct" element={<AddProduct />}>Agregar producto</Link>
            {
              isLoading ? 
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner> 
            :
            <div className="divHome">
              {productos.map((producto) => <Products key={producto.id} {...producto.data()} id={producto.id} />)}
            </div>
            }
        </div>
    )
}


export default Home