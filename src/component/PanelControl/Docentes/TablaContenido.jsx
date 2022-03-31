import React from 'react';
import Titulo from '../Titulo';
import TablaContenidoTr from './TablaContenidoTr';

const TablaContenido = () => {
  return (
    <div className='ml-3 mr-3 '>
        <Titulo name ={"Contenido"}></Titulo>
        <table className="table">
            <thead className="thead-dark">
                <tr >
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                </tr>
            </thead>
            <tbody>
                <TablaContenidoTr></TablaContenidoTr>
                
            </tbody>
        </table>
    </div>
  );
};

export default TablaContenido;
