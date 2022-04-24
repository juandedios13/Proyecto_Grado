import React, { useEffect, useState } from 'react';
import {
    useParams
  } from "react-router-dom";
import InputActualizarPreguntas from './InputActualizarPreguntas';

const ActualizarPreguntas = (props) => {

    const {id} = useParams();

    const [estado,setEstado] = useState(false);
    const [pregunta,setPregunta] = useState([])
    const [respuestas,setRespuestas]= useState([]);

    const [datos,setDatos] =  useState({
        pregunta:[{
            PreguntaExamen:"",
        }],
        respuestas:[
            {
                "iIdrespuestasExamen": "",
                "EstadoRespuestaPreguntaExamen": "",
                "respuestasPrguntasExamen": "",
                "preguntasExamen_IdpreguntasExamen": ""
            }
        ]
        

    });

    useEffect(()=>{

        let token = localStorage.getItem('token');

        const dato = {
            datos:{IdpreguntasExamen:id}
        }

        if(token != undefined && token != null ){
            let tokenn = JSON.parse(token);
            let datosApi = {  
                method: 'post',
                body: JSON.stringify(dato),
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': JSON.stringify( tokenn.token)
                }
            }

            fetch("http://localhost:3001/ListarPreguntasRespuestas",datosApi).then((e)=>{
                return e.json(); 
            }).then((e)=>{
                console.log(e);
                setPregunta(e.pregunta[0]);
                setRespuestas(e.respuestas);
            });
        }else{
            
        }

    },[]);

    const handleDatos = (e)=>{
        console.log(e.target.name);
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };

    const handlePregunta = (e)=>{
        console.log(e.target.name);
        setPregunta({
            ...pregunta,
            [e.target.name]: e.target.value
        })
    };

    const  handleRespuestas = (e)=>{
        //console.log(e.currentTarget.id);
        //console.log(e.target.name);
        let name = e.target.name;
        //let posicion = e.currentTarget.id -1;
        //let guardar = respuestas[posicion];
        //console.log(respuestas[posicion]);
        if(name == "respuestasPrguntasExamen"){

            //let respuesta = respuestas.map((e)=>{});
           // guardar.respuestasPrguntasExamen = e.target.value;
            //console.log(guardar);

            
            
            
        }else if(name == "EstadoRespuestaPreguntaExamen"){
            //setRespuestas(
            //    {
            //        ...respuestas,
            //        [[posicion].EstadoRespuestaPreguntaExamen]: e.target.value
            //    }
            //)
        }


        
        //setPregunta({
        //    ...pregunta,
        //    [e.target.name]: e.target.value
       // })
    };



    const handleSubmit = (e)=>{
        e.preventDefault();

        //console.log(e.target[3]);
        let datos = e.target;
        //console.log(datos[0]);
        let respuesta =  respuestas;
        console.log(respuesta);
        let tipo , n = 0;

        for (let index = 0; index < datos.length; index++) {
            //console.log(datos[index])
            if(datos[index].id != undefined ){
                respuesta = respuesta.map((e)=>{
                    //console.log(datos[index].id);
                    if(datos[index].id == e.iIdrespuestasExamen){
                        
                        if(datos[index].name == 'respuestasPrguntasExamen'){
                            return({...e,
                                    [e.respuestasPrguntasExamen]:datos[index].value})
                        }else if(datos[index].name == 'EstadoRespuestaPreguntaExamen'){
                            console.log(e.EstadoRespuestaPreguntaExamen);
                            let estado = datos[index].checked == true?1:0;
                            n = estado == 1?n+1:n+0;
                            return({...e,
                                    ['EstadoRespuestaPreguntaExamen']:estado}
                            )
                        }
                    }else if(datos[index].name == 'tipo'){
                        tipo = datos[index].value;
                    }
                    return e;
                })
            }
                                
        }
        console.log(pregunta)
        console.log(respuesta);
        if(tipo == 1 && n>1){
            setEstado(!estado);
        }else if(tipo == 0 && n == 1){
            setEstado(!estado);
        }else{
            setEstado(!estado);
        }


        if(estado){
            console.log('ooooooooooooooooooooooooo')
        }
         //datos.map((e)=>{

            //if(e.name == "respuestasPrguntasExamen"){
              //  console.log(e);
          // }

            //return e;
        //})
        //console.log(respuestas);

        if(estado){

            let url = "http://localhost:3001/Update/Examen";
            let datos = {
                tipo:tipo,
                pregunta: pregunta,
                respuestas: respuestas
            }
            let datosApi = {
                method: 'put',
                body:JSON.stringify({
                    datos
                }),
                headers:{
                    'Content-Type': 'application/json',
                }
            } 
            fetch(url,datosApi ).then((e)=>{
                    if(e.status === 200){
                        return e.json();     
                    }else if(e.status >= 400){
                        alert('Error');
                    }
            }).then((e)=>{
                        
            });

        }

    }



  return (
    <>
    <div>-</div>
    
    <div className="card card-primary mr-5 ml-5 mt-3 ">
  <div className="card-header">
    <h3 className="card-title">Pregunta y respuestas</h3>
  </div>
  {/* /.card-header */}
  {/* form start */}
        <form onSubmit={handleSubmit}>
            <div className="card-body">
            
            {/* /.form-group */}
            <div className="form-group text-left text-dark">
                <label>Tipo de usuario</label>
                <select id='select' onChange={()=>{}}  defaultValue={pregunta.tipoPregunta == 0?'Opción unica':'Opción múltiple'} name='tipo' className="form-control select2 select2-hidden-accessible" style={{ width: '100%' }} data-select2-id={9} tabIndex={-1} aria-hidden="true">
                    <option value={'0'} >Opción unica</option>
                    <option value={'1'}>Opción múltiple</option>
                </select>
            </div>

            <InputActualizarPreguntas tipo={'Pregunta'} id={pregunta.PreguntaExamen} name={"PreguntaExamen"} n={0} verdadera={0} text={pregunta.PreguntaExamen} onChange={handlePregunta} estado={false}></InputActualizarPreguntas>
            {
                respuestas.map((e,index)=>{
                    return(
                        <InputActualizarPreguntas posicion={index} tipo={'Respuesta '+(index+1)} id={e.iIdrespuestasExamen} name={"respuestasPrguntasExamen"} namecheck={"EstadoRespuestaPreguntaExamen"} n={index+1} verdadera={e.EstadoRespuestaPreguntaExamen} text={e.respuestasPrguntasExamen} estado={e.EstadoRespuestaPreguntaExamen} onChange={handleRespuestas}></InputActualizarPreguntas>
                    )
                })
            }
            
            <div  class="alert alert-danger" style={estado? {display :'block'}:{display:'none'}} role="alert">
                Datos incorrectos
            </div>


            </div>
            {/* /.card-body */}
            <div className="card-footer">
            <button type="submit" className="btn btn-primary">Actualizar</button>
            </div>
        </form>
    </div>
    {/* /.card */}



    </>
  )
}

export default ActualizarPreguntas