import React, { useEffect, useState } from 'react';

const TablaContenidoTr = () => {
    const [dato, setdato] = useState([]);
    
    useEffect(() => {

        let token = localStorage.getItem('token');

        

        if(token != undefined && token != null ){
            let tokenn = JSON.parse(token);
            let datosApi = {  
                method: 'get',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': JSON.stringify( tokenn.token)
                }
            }

            fetch("http://localhost:3001/ListarContenido",datosApi).then((e)=>{
                return e.json(); 
            }).then((e)=>{
                console.log(e.respuesta);
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
            
            dato.length>0  ?   
            dato.map((e,index)=>{
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark pl-5 text-justify' >{e.NombreContenido}</td>     
                </tr>)
            }) : <tr><th>nada</th></tr>
        }


    </>
  );
};

export default TablaContenidoTr;
