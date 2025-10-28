import React from "react";
import "./Cards.css"; // si tienes estilos

function Cards() {
  const productos = [
    {
      id: 1,
      nombre: "Base TimeWise",
      descripcion: "Base ligera para una piel luminosa",
      precio: "COP 50.000",
      imagen: "/img/bases.jpeg",
    },
    {
      id: 2,
      nombre: "Spray corporal",
      descripcion: "Fragancias que envuelven",
      precio: "COP 68.900",
      imagen: "/img/spray.jpeg",
    },
    {
      id: 3,
      nombre: "Reductor de arrugas",
      descripcion: "Adiós líneas de expresión",
      precio: "COP 88.000",
      imagen: "/img/arrugas.jpeg",
    },
    {
      id: 4,
      nombre: "Rutina de noche",
      descripcion: "Un olor fresco y floral todo el día",
      precio: "COP 168.000",
      imagen: "/img/gel.jpeg",
    },
  ];

  return (
    <div className="cards-container">
      {productos.map((p) => (
        <div key={p.id} className="card-item">
          <img src={p.imagen} alt={p.nombre} />
          <h3>{p.nombre}</h3>
          <p>{p.descripcion}</p>
          <span>{p.precio}</span>
        </div>
      ))}
    </div>
  );
}

export default Cards;
