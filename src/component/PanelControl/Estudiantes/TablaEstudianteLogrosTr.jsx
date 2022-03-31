import React, { useEffect, useState } from 'react';

const TablaEstudianteLogrosTr = () => {

    
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
                //console.log(e.respuesta);
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
                return (<tr key={index+1}>
                    <th className='text-dark' scope="row">{index+1}</th>
                    <td className='text-dark' >{e.NombreUsario}</td>
                    <td className='text-dark'>{e.ApellidoUsuario}</td>
                    <td className='text-dark'>{e.estudianteEdad}</td>
                </tr>)
            }) : <di></di>
        }


    </>
  );
};

export default TablaEstudianteLogrosTr;
