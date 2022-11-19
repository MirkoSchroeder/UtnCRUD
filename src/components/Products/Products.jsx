import React from "react";
import { Link } from "react-router-dom";
import "./Products.css"
import {Button, Card} from 'react-bootstrap';

const Products = ({image, nombre, precio, id}) => {

    return (
        <div className="divProducts">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="wyh" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>${precio}</Card.Text>
                    <Button as={Link} to={`/productos/${id}`} variant="primary">Ver detalle</Button>
                    <Button as={Link} to={`/producto/editar/${id}`} variant="primary">Editar producto</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Products