import React from "react";
import PropTypes from "prop-types";

import '../style/fruta.css'

const Item = (props) => {
  return (
    <div className="item">
      <h5 className="quantity">{props.quantity}</h5>
      <div>
        <h5>{props.name}</h5>
        <h6 className="text-muted">{props.description}</h6>
      </div>
      <div className="badge badge-info">{props.category}</div>
      <h5 className="price"> S/ {props.price}</h5>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
  price: PropTypes.number.isRequired
} 

const ItemList = () => {
  const items = [
    {
      name: "Cereales con chocolate",
      description: "Cereales rellenos de chocolate",
      quantity: 2,
      category: "Cereales",
      price: 5,
    },
    {
      name: "Hamburguesa con queso",
      description: "Hamburguesa rica y saludable",
      quantity: 1,
      category: "Fast-food",
      price: 15,
    },
    {
      name: "Agua mineral",
      description: "Agua de un charco del Himalaya",
      quantity: 2,
      category: "Bebida",
      price: 5,
    },
  ];

  return (

    <>
      <div>
        {items.map((item) => (
          <div key={item.name} className="card">
            Name: {item.name} | Description: {item.description} | Quantity: {item.quantity} | Category: {item.category} | Price: $ {item.price}
          </div>
        ))}
      </div>
      
    </>
  ); 
};


export default ItemList;
// En el return  de ItemList usa un map para iterar una lista del compoenete Item. Agregar proptypes y  obligar a que se le pase valor a la prop añadiendo .isRequired a cualquiera de los tipos de name y price
