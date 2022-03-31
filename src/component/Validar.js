import React, { useEffect, useState } from 'react';
import { Page404 } from './404/Page404';
import Context from './Estudiantes/Context';
import Login from './Login/Login';
import { Index } from './PanelControl';

   


const Validar = (props)=>{
        

    let token = localStorage.getItem('token');
    let tokenn = JSON.parse(token);
    if(tokenn !== undefined && tokenn !== null ){
        console.log(tokenn.tipo);
        
        if(tokenn.tipo == "Admin" || tokenn.tipo == "admin" || tokenn.tipo == "Docente" || tokenn.tipo == "docente" ){
         
           return(
                <Index tipo={tokenn.tipo}></Index>
           )
        }else if(tokenn.tipo == "Estudiante" || tokenn.tipo == "estudiante"){
            return(
                <Context></Context>
           )
        }else{
            return(
                <Page404></Page404>
            )
        }
    }else{
        
        return(
            <Login></Login>
        )
    }
}
   
export default Validar;