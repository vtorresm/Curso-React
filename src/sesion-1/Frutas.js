import React from "react";

import '../style/fruta.css'

const Frutas = () => {
  const listaFrutas = ["🍌", "🍐", "🍉", "🍇", "🍎", "🥭"];

  const productos = {
    frutas: [
      {
        id: 1,
        name: "Banana",
        icon: "🍌",
        price: 3,
      },
      {
        id: 2,
        name: "Pera",
        icon: "🍐",
        price: 6,
      },
      {
        id: 3,
        name: "Sandía",
        icon: "🍉",
        price: 2,
      },
      {
        id: 4,
        name: "Uvas",
        icon: "🍇",
        price: 7,
      },
    ],
  };

  return (
    <>
      {listaFrutas.map((fruta) => (
        <div key={fruta}>{fruta}</div>
      ))}

      <div>
        {productos.frutas.map((fruta) => (
          <div key={fruta.id} className="card">
            ${fruta.price}-{fruta.icon}-{fruta.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Frutas;
