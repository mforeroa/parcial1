import React from 'react';
import { Card } from "react-bootstrap";


function Vehiculo(props) {
    console.log(props.vehiculo);
  return (
    <div>
        <Card>
            <Card.Body>
            <Card.Title>{props.vehiculo.marca}</Card.Title>
            <Card.Img src={props.vehiculo.imagen} />
            <Card.Text>Kilometraje: {props.vehiculo.kilometraje}</Card.Text>
            <Card.Text>Color: {props.vehiculo.color}</Card.Text>
            <Card.Text>Referencia: {props.vehiculo.referencia}</Card.Text>
            </Card.Body>
        </Card>


  </div>);
}

export default Vehiculo;