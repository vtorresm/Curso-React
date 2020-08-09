import React from 'react';

const InputConRef = ({onSend}) => {

  const nombreRef = React.createRef();
  const emailRef = React.createRef();

  const manejadorClick = () => {
    const nombre = nombreRef.current.Value
    const email = emailRef.current.Value
    onSend({nombre, email})
  }

  return(
    <div>
      <input type="text" ref={nombreRef} placeholder="Nombre"/>
      <input type="text" ref={emailRef} placeholder="email"/>
      <button onClick={manejadorClick}></button>
    </div>
  )
}

const InputNoControladoRef = () => {

  const send = (data) => {
    console.log(data)
  }

  return(
    <div>
      <h3>Input No controlados Refs</h3>
      <InputConRef onSend={send}/>
    </div>
  )
}

export default InputNoControladoRef;