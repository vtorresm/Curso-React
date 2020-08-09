import React from 'react';

class Stateful extends React.Component {

  State = {
    text: 'Hola Grupo'
  }

  render() {
    return (
    <div>{ this.State.text }</div>
    )
  }
}

export default Stateful;