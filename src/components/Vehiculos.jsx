import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Table } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import Vehiculo from './Vehiculo';


function Vehiculos() {
    const [vehiculos, setVehiculos] = useState([]);
    const [selectedvehiculo, setSelectedVehiculo] = useState(false);
    const [vehiculo, setVehiculo] = useState(null);
    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setVehiculos(data);
          });
      });

     const handleVehiculoClick=(vehiculo)=>{
        setSelectedVehiculo(true);
        setVehiculo(vehiculo)
    }



    return (
      <Container>
      <h1><FormattedMessage id="RoomsTitle"/></h1>
      <Row className="g-4">
      <Table>
        <thead>
            <tr>
            <th>#</th> 
            <th>Marca</th>
            <th>Linea</th>
            <th>Modelo</th>
            </tr>
        </thead>
        <tbody>
            {vehiculos.map((vehiculo, index) => (
            <tr key={index}  onClick={() => handleVehiculoClick(vehiculo)}>
                <td>{index + 1}</td>
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