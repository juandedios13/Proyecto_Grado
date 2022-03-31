import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';

const FormsLogin = () => {

    let navigate = useNavigate();

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>e.preventDefault();

    const [datos, setdatos] = useState({
        correo:"",
        password:""
    });
    
    const handleDatos= (e)=>{
        setdatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    const handleEnvio = (e)=>{
        if(datos.user!="" && datos.password!=""){
            envio();
        }
    }

    const envio = ()=>{
        let datosApi = {
            method: 'post',
            body:JSON.stringify({
                datos
            }),
            headers:{
                'Content-Type': 'application/json'
              }
        } 
        console.log("asdqwe")
        fetch("http://localhost:3001/login",datosApi).then((e)=>{
                return e.json(); 
        }).then((e)=>{
            localStorage.setItem('token',JSON.stringify(e));
            if(e.tipo == "docente" || e.tipo == "Docente" ||  e.tipo == "Admin" ||  e.tipo == "admin"){
                enviar('Panel')
            }else if(e.tipo){
                enviar('Estudiantes')
            }
        });
    }


    const enviar = (url)=>{
        navigate(`/${url}`);
    }

    return (
        <div>
           <form className="login" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="correo" onChange={handleDatos} />
				<input type="password" placeholder="password" name="password" onChange={handleDatos} />
				<input type="submit"  value="Login" onClick={handleEnvio} />
           </form> 
        </div>
    )
}

export default FormsLogin
