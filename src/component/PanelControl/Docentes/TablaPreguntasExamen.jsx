import React from 'react';
import Titulo from '../Titulo';
import TablaPreguntasExamenTr from './TablaPreguntasExamenTr';
import {
  useParams
} from "react-router-dom";

const TablaPreguntasExamen = () => {

  const {id} = useParams();

  console.log(id);

    return (
        <div className='ml-3 mr-3 '>
          <Titulo name ={"Preguntas"}></Titulo>
          <table className="table">
            <thead className="thead-dark">
              <tr >
                <th scope="col">#</th>
                <th scope="col">Examen</th>
                <th scope="col">Pregunta</th>
                <th scope="col">Numero de respuestas</th>
                <th scope="col">tipo de pregunta</th>
                <th scope="col">Visualizar</th>
              </tr>
            </thead>
            <tbody>
              <TablaPreguntasExamenTr id={id} />
              
            </tbody>
          </table>
        </div>
      );
};

export default TablaPreguntasExamen;
