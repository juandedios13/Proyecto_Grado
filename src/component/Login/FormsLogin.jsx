import React, { useState } from 'react'

const FormsLogin = () => {

    const handleSubmit = (e)=>e.preventDefault();

    const [datos, setdatos] = useState({
        user:"",
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
        fetch("http://localhost:3001/",datosApi).then((e)=>{
                return e.json(); 
        }).then((e)=>{
            console.log(e);
        });
    }

    return (
        <div>
           <form className="login" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="user" onChange={handleDatos} />
				<input type="password" placeholder="password" name="password" onChange={handleDatos} />
				<input type="submit"  value="Login" onClick={handleEnvio} />
           </form> 
        </div>
    )
}

export default FormsLogin
