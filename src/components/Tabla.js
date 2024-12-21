import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Sor from './Sor';
import { ApiContext } from '../context/ApiContext';

function Tabla() {
    const { receptek } = useContext(ApiContext);
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Leírás</th>
                    <th>Kép</th>
                    <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                {receptek.map((elem) => {
                    return(<Sor elem={elem} key={elem.id}></Sor>)  
                })}
            </tbody>
        </Table>
    )
}

export default Tabla;

