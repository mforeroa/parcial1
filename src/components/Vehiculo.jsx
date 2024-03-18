import React from 'react';
import { Card } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';


function Vehiculo(props) {
    
  return (
    <div>
        <Card className='carCard'>
            <Card.Body>
            <Card.Title className='carCardTitle'>{props.vehiculo.marca}</Card.Title>
            <Card.Img className='carCardImage' src={props.vehiculo.imagen} />
            <Card.Text className='carCardText'> -> <FormattedMessage id="km"/>: {props.vehiculo.kilometraje}</Card.Text>
            <Card.Text className='carCardText'> -> <FormattedMessage id="color"/>: {props.vehiculo.color}</Card.Text>
            <Card.Text className='carCardText'> -> <FormattedMessage id="reference"/>: {props.vehiculo.referencia}</Card.Text>
            </Card.Body>
        </Card>


  </div>);
}

export default Vehiculo;