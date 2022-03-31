import React from 'react'
import Titulo from '../Titulo';
import TablaDocenteTr from './TablaDocenteTr';

const TablaDocente = () => {

  return (
    <div className='ml-3 mr-3 '>
      <Titulo name ={"Docentes"}></Titulo>
      <table className="table">
        <thead className="thead-dark">
          <tr >
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <TablaDocenteTr></TablaDocenteTr>
          
        </tbody>
      </table>
    </div>
  );
}

export default TablaDocente
