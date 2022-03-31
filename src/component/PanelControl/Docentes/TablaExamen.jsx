import React from 'react';
import Titulo from '../Titulo';
import TablaExamenTr from './TablaExamenTr';

const TablaExamen = () => {
    return (
        <div className='ml-3 mr-3 '>
          <Titulo name ={"Examenes"}></Titulo>
          <table className="table">
            <thead className="thead-dark">
              <tr >
                <th scope="col">#</th>
                <th scope="col">Unidad</th>
                <th scope="col">Nombre Examen</th>
                <th scope="col">Numero de preguntas</th>
                <th scope="col">Visualizar</th>
              </tr>
            </thead>
            <tbody>
              <TablaExamenTr></TablaExamenTr>
              
            </tbody>
          </table>
        </div>
      );
};

export default TablaExamen;
