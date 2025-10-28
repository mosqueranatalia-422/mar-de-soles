import React from "react";
import bases from "../assets/img/bases.jpeg";
import spray from "../assets/img/spray.jpeg";
import arrugas from "../assets/img/arrugas.jpeg";
import gel from "../assets/img/gel.jpeg";

const products = [
  { img: bases, name: "Base TimeWise", desc: "Base ligera para una piel luminosa", price: "COP 50.000 C/U" },
  { img: spray, name: "Spray corporal", desc: "Fragancias qué envuelven", price: "COP 68.900" },
  { img: arrugas, name: "Reductor de arrugas", desc: "Adiós líneas de expresión", price: "COP 88.000" },
  { img: gel, name: "Rutina de noche", desc: "Un olor fresco y floral todo el día", price: "COP 168.000" },
];

const ProductsList = () => {
  return (
    <div className="productos-lista">
      {products.map((p, i) => (
        <div className="producto-item" key={i}>
          <img src={p.img} alt={p.name} />
          <h3>{p.name}</h3>
          <h4>{p.desc}</h4>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
