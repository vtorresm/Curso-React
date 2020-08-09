import React, { Fragment } from "react";

const Comida = () => {
  return (
    <Fragment>
      <li>Pan</li>
      <li>Ajo</li>
      <li>Salsas</li>
    </Fragment>
  );
};

const Bebidas = () => {
  return (
    <Fragment>
      <li>Gaseosa</li>
      <li>Jugos</li>
    </Fragment>
  );
};

const Tienda = () => {
  return (
    <>
      <ul>
        <Comida />
        <Bebidas />
      </ul>
    </>
  );
};

export default Tienda;
