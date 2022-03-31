import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";

const TablaEstudianteTr = () => {

    
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        let token = localStorage.getItem('token');

        const datos = {
            datos:{tipo:"estudiante"}
        }

        if(token != undefined && token != null ){
            let tokenn = JSON.parse(token);
            let datosApi = {  
                method: 'post',
                body: JSON.stringify(datos),
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': JSON.stringify( tokenn.token)
                }
            }

            fetch("http://localhost:3001/Listar",datosApi).then((e)=>{
                return e.json(); 
            }).then((e)=>{
                setdato(e.respuesta);
            });
        }else{
            
        }
      return () => {
      };
    }, []);
    
    let n = 0;

  return (
    <>

        {
            
            dato.length>0 ?   

            dato.map((e,index)=>{
                
                return (
                    <tr key={index+1}>
                        <th className='text-dark' scope="row">{index+1}</th>
                        <td className='text-dark' >{e.NombreUsario}</td>
                        <td className='text-dark'>{e.ApellidoUsuario}</td>
                        <td className='text-dark'>{e.estudianteEdad}</td>
                        <td> <Link to={`/Panel/Usuario/tipo/${e.tipoUsuario}/${e.CorreoUsuario}`} className='nav-link'><i className='nav-icon fas fa-edit'>Editar</i> </Link> </td>
                        <td> <a className='nav-link'><i className='nav-icon fas fa-edit'>Eliminar</i> </a> </td>
                    </tr>)
            }) : <tr></tr>
        }


    </>
  );
};

export default TablaEstudianteTr;
