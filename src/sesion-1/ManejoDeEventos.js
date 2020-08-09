import React from "react";

class ManejoDeEventos extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Manzanas {this.state.count}</p>
        <button onClick={this.handleClick}>Sumar</button>
      </div>
    );
  }
}

export default ManejoDeEventos;
