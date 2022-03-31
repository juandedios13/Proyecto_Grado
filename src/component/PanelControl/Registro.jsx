import React, { useState } from 'react';
import Titulo from './Titulo';

const Registro = () => {

    const[tipo,setTipo] = useState('Docente')

    const[datos,setDatos] = useState({
        nombre:'',
        apellidos:'',
        correo:'',
        contrasena:'',
        tipo:tipo,
        edad:''
    })

    const handleChange = (e)=>{

        setTipo(e.target.value)
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(datos.Nombre != '' && datos.Apellidos != '' && datos.Correo != ''  && datos.Contrasena != ''){

            
            let datosApi = {
                method: 'post',
                method: 'post',
                body:JSON.stringify({
                    datos
                }),
                headers:{
                    'Content-Type': 'application/json',
                }
            } 
            console.log(datosApi);
            fetch("http://localhost:3001/registarAdminDocente",datosApi ).then((e)=>{
                    if(e.status === 200){
                        return e.json();     
                    }else if(e.status >= 400){
                        alert('Error');
                    }
                }).then((e)=>{
                        if(e.registro == 'true' || e.registro ){
                            alert('Registro exitoso');
                            setDatos({
                                nombre:'',
                                apellidos:'',
                                correo:'',
                                contrasena:'',
                                tipo:tipo,
                                edad:''
                            })
                        }
                });

        }

    }

    const handleDatos = (e)=>{
        console.log(e.target.name);
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

  return( 

    <>
    <div>-</div>
    
    <div className="card card-primary mr-5 ml-5 mt-3 ">
  <div className="card-header">
    <h3 className="card-title">Registro</h3>
  </div>
  {/* /.card-header */}
  {/* form start */}
  <form onSubmit={handleSubmit}>
    <div className="card-body">

            <div className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">Nombre</label>
                <input type="text" className="form-control" value={datos.nombre} name='nombre' placeholder="Nombre" onChange={handleDatos} />
            </div>

            <div className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">Apellidos</label>
                <input type="text" className="form-control" value={datos.apellidos} name='apellidos' placeholder="Apellidos" onChange={handleDatos} />
            </div>

            <div className="form-group text-left text-dark">
                <label className='' htmlFor="exampleInputEmail1">Correo electronico</label>
                <input type="email" className="form-control" value={datos.correo} name='correo' placeholder="Correo electronico" onChange={handleDatos} />
            </div>
            <div className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" value={datos.contrasena} name='contrasena' placeholder="Contraseña" onChange={handleDatos} />
            </div>

            
            {/* /.form-group */}
            <div className="form-group text-left text-dark">
                <label>Tipo de usuario</label>
                <select onChange={handleChange} value={tipo} name='tipo' className="form-control select2 select2-hidden-accessible" style={{ width: '100%' }} data-select2-id={9} tabIndex={-1} aria-hidden="true">
                    <option value={'Docente'} >Docente</option>
                    <option value={'Estudiante'}>Estudiante</option>
                </select>
            </div>
            {/* /.form-group */}


            {/* /.Estudiante */}
            <div className="form-group text-left text-dark" style={tipo == 'Estudiante'? {display :'block'}:{display:'none'}}>
                <label htmlFor="exampleInputPassword1">Edad</label>
                <input type="number" className="form-control" value={datos.edad} name='edad' placeholder="Edad" onChange={handleDatos} />
            </div>

            </div>
            {/* /.card-body */}
            <div className="card-footer">
            <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
    {/* /.card */}



    </>
  );
};

export default Registro;
