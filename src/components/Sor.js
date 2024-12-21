
import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext'

function Sor(props) {
    const{deleteData, setReceptek }= useContext(ApiContext)
    return (
        <tr>
            <td>{props.elem.name}</td>
            <td>{props.elem.desc} 
                </td>
                <td> <a href={props.elem.url} >
                        Megnyitás
                    </a></td>
            <td><button onClick={()=>{deleteData(`recipes/${props.elem.id}`,setReceptek)}}>x</button></td>
        </tr>
    );
}

export default Sor;

