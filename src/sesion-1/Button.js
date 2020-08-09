import React from "react";

/* const Button = ({text, number, lista}) => {
  return (
    <div>
      <p>{lista[0]}</p>
      <p>{number}</p>
      <button>{text}</button>
    </div>
  );
}; */

class Button extends React.Component {
  constructor(props){
     super(props)
  }
  render() {
      return(
      <div> {this.props.text}</div>
      )
  }
}

export default Button;
