import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Table } from "react-bootstrap";
import Vehiculo from './Vehiculo';
import '../App.css';
import { FormattedMessage } from 'react-intl';


function Vehiculos() {
    const [vehiculos, setVehiculos] = useState([]);
    const [selectedvehiculo, setSelectedVehiculo] = useState(false);
    const [vehiculo, setVehiculo] = useState(null);

    useEffect(() => {
        const URL = "http://localhost:3001/cars";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setVehiculos(data);
          });
      },[]);

     const handleVehiculoClick=(vehiculoId)=>{
        const URL = `http://localhost:3001/cars/${vehiculoId}`;
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch vehicle details');
        }
        return response.json();
      })
      .then((data) => {
        setSelectedVehiculo(true);
        setVehiculo(data)
      })
      .catch((error) => {
        console.error('Error fetching vehicle details:', error);
      });

    }


    return (
      <Container className='carContainer'>
      <Row >
      <Table>
        <thead class="table-dark">
            <tr>
            <th>#</th> 
            <th><FormattedMessage id= "brand"/></th>
            <th><FormattedMessage id= "line"/></th>
            <th><FormattedMessage id= "model"/></th>
            </tr>
        </thead>
        <tbody>
            {vehiculos.map((vehiculo, index) => (
            <tr key={index}  onClick={() => handleVehiculoClick(vehiculo.id)}>
                <td className='indexfont'>{index + 1}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.linea}</td>
                <td>{vehiculo.modelo}</td>
            </tr>
            ))}
        </tbody>
        </Table>
        <Col>
        { selectedvehiculo &&
            (<Vehiculo vehiculo={vehiculo}/>)}
        </Col>
      </Row>
      </Container>


);
}

export default Vehiculos;