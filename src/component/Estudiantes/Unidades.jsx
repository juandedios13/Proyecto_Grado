import React from 'react';
import PropTypes from 'prop-types';



const Unidades = (props) => {

    const datos = props.datos;
    let n = 0;
  return (
      <>
          {
            datos.map((e)=>{
                return (
                    <div className="unidad">
                        <img src={`../../assets/${e.img}`} alt= "No se ve" />
                        <input type="button" defaultValue={e.name} />
                    </div>
                )
            })
          }
      </>

  );
};

Unidades.propTypes = {
    datos: PropTypes.object
};

export default Unidades;
