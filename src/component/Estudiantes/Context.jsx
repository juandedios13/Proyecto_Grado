import React from 'react';
import Unidades from './Unidades';
import '../../style/estilos2.css';
import Header from '../PanelControl/Header';

const Context = () => {

    const dato1 = [ 
         {
            name: "Unidad 1",
            img:"img/planeta1.png",
            url:""
        },
        {
            name: "Unidad 2",
            img:"img/planeta2.png",
            url:""
        },
        {
            name: "Unidad 3",
            img:"img/planeta3.png",
            url:""
        },
        {
            name: "Unidad 4",
            img:"img/planeta4.png",
            url:""
        }
    ]
    const dato2 = [
        {
            name: "Unidad 5",
            img:"img/planeta5.png",
            url:""
        },
        {
            name: "Unidad 2",
            img:"img/planeta2.png",
            url:""
        },
        {
            name: "Unidad 7",
            img:"img/planeta7.png",
            url:""
        },
        {
            name: "Unidad 8",
            img:"img/planeta8.png",
            url:""
        }

    ]



  return (
    <div className='Container'>
        <div className='contenedor'>
            <div className='primerailera'>
                <Unidades datos={dato1} />
            </div>
            <div className='segundailera'>
                <Unidades datos={dato2} />
            </div>
            
        </div>
    </div> 
  );
};

export default Context;
