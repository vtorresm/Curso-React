import React from "react";

const Parent = ({ children }) => {
  return <div>{children}</div>;
};

const PropChildren = () => {
  return (
    <div>
      <Parent>
        Soy Victor
        <p>Hola</p>
      </Parent>
    </div>
  );
};

export default PropChildren;
