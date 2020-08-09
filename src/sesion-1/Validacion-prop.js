import React from "react";
import PropTypes from "prop-types";

const Hijo = (props) => {
  return (
    <div>
      <p>{props.nombre}</p>
      <p>{props.edad}</p>
    </div>
  );
};

Hijo.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number
}

Hijo.defaultProps = {
  nombre: 'Victoria',
  edad: 18
}

const ValidacionProps = () => {
  // return <Hijo nombre="Victor" edad={24} />;
  return <Hijo />;
};

export default ValidacionProps;
