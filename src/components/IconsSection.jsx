import React from "react";
import entrega from "../assets/img/icons8-entrega.gif";
import planta from "../assets/img/icons8-planta-50.png";
import pago from "../assets/img/metodo de pago.png";

const IconsSection = () => {
  const icons = [
    { img: entrega, text: "Envíos a todo el país" },
    { img: planta, text: "Productos naturales" },
    { img: pago, text: "Pago seguro" },
  ];

  return (
    <div className="iconos-lista">
      {icons.map((icon, index) => (
        <div key={index} className="icono-item">
          <img src={icon.img} alt={icon.text} />
          <p>{icon.text}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsSection;
