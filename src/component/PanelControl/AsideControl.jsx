import React from 'react';
import {
    Link,
    useNavigate 
  } from "react-router-dom";

const AsideControl = () => {
    let navigate = useNavigate();
    let token = localStorage.getItem('token');
    let tokenn = JSON.parse(token);

    const handleclick = ()=>{

        localStorage.removeItem('token');
        navigate(`/`);


    }

  return ( 

        <aside className="control-sidebar control-sidebar-dark">
            <div className='mb-1'> <Link to={`/Panel/Usuario/tipo/${tokenn.tipo}/${tokenn.correo}`} className='nav-link'><i className='nav-icon fas fa-edit'>Usuario</i> </Link></div>
            <div onClick={handleclick} className='mb-1'>  Cerrar</div>
        </aside>

    );
};

export default AsideControl;
