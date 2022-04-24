import React from 'react'

const InputActualizarPreguntas = (props) => {

  //const name =  + props.n;
  const namecheckbox = "checkbox" + props.n;

  return (
    <>
          <div key={props.n} className="form-group text-left text-dark">
                <label htmlFor="exampleInputPassword1">{props.tipo}</label>
                <textarea  name={props.name} id={props.id}  posicion={props.posicion}  className="form-control" sid={'exampleFormControlTextarea'+props.id} rows={3} defaultValue={props.text != ""?props.text:""} onChange={props.onChange}  />
                
                
              {  
                  props.tipo !=  'Pregunta' ? 
                    <div className="form-check form-switch">
                      <input className="form-check-input"  posicion={props.posicion} type="checkbox" id={props.id} name={props.namecheck} defaultChecked={props.verdadera == 1?true:false} onChange={props.onChange}  />
                      <label className="form-check-label" htmlFor={props.namecheck}>{props.verdadera == 1?'Verdadera':'Falsa'}</label>
                    </div> 
                  : <></> 
              }

               

          </div>
    </>
  )
}

export default InputActualizarPreguntas