import React from 'react'
import TablaEstudianteTr from './TablaEstudianteTr';

const TablaEstudiantesLogros = () => {

  return (
    <div className='ml-3 mr-3 '>
      
      <table className="table">
        <thead className="thead-dark">
          <tr >
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          <TablaEstudianteLogrosTr></TablaEstudianteLogrosTr>
          
        </tbody>
      </table>
    </div>
  );
}

export default TablaEstudiantesLogros
