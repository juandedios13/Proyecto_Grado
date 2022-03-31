import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";

const TablaPreguntasExamenTr = (props) => {
   
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        console.log(props.id);

        let token = localStorage.getItem('token');

        const datos = {
            datos:{idexamen:props.id}
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

            fetch("http://localhost:3001/ListarPreguntas",datosApi).then((e)=>{
                return e.json(); 
            }).then((e)=>{
                //console.log(e.respuesta);
                setdato(e.respuesta);
            });
        }else{
            
        }
      return () => {
      };
    }, []);

  return (
    <>

        {
            
            dato.length>0 ?   

            dato.map((e,index)=>{
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark text-justify' >{e.NombreExamen}</td>
                    <td className='text-dark text-justify' ><textarea className="form-control" disabled={true} id="exampleFormControlTextarea1" rows="3" defaultValue={e.PreguntaExamen} /></td>
                    <td className='text-dark ' >{e.Nrespuesta}</td>
                    <td className='text-dark ' >{e.tipoPregunta == 0?'Opción unica':'Opción múltiple' }</td>
                    <td> <Link to={`/Panel/PreguntaRespuesta/${e.IdpreguntasExamen}`} className='nav-link'><i className='nav-icon fas fa-edit'>Visualizar</i> </Link> </td>
                    
                </tr>)
            }) : <tr></tr>
        }
    </>
  );
};

export default TablaPreguntasExamenTr;
