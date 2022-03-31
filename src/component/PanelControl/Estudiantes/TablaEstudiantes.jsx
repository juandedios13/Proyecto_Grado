import React from 'react'
import Titulo from '../Titulo';
import TablaEstudianteTr from './TablaEstudianteTr';

const TablaEstudiantes = () => {

  return (
    <div className='ml-3 mr-3 '>
      <Titulo name={'Estudiantes'}></Titulo>
      <table className="table">
        <thead className="thead-dark">
          <tr >
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Edad</th>
            <th scope='col'>Editar</th>
            <th scope='col'>ELiminar</th>
          </tr>
        </thead>
        <tbody>
          <TablaEstudianteTr></TablaEstudianteTr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaEstudiantes
