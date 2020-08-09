import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


const Hijo = (render) => {

  const modificar = () => {
  //  Pasarle el valor de un string como argumento a render
  }
  
  return (
    <>
    <button onClick={modificar}> Click</button>
    </>
  )
}

const Padre = () => {

  const [texto, setTexto] = useState('') 

  const actualizar = (text) => {
   // Actualizar el estado de texto con el parámetro text
  }

  return (
    <div>
      <p>{texto}</p>
      <Hijo render={actualizar} />
    </div>
  )
}

export default Padre;