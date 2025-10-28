import React, { useState } from "react";
import modelo from "../assets/img/modelo.jpg";

const Testimonials = () => {
  const [nombre, setNombre] = useState("");
  const [opinion, setOpinion] = useState("");

  const handleSubmit = () => {
    if (!nombre.trim() || !opinion.trim()) {
      alert("Por favor completa todos los campos antes de enviar.");
      return;
    }

    const nuevaOpinion = {
      nombre,
      opinion,
      fecha: new Date().toLocaleString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
    opiniones.push(nuevaOpinion);
    localStorage.setItem("opiniones", JSON.stringify(opiniones));

    window.location.href = "/opiniones";
  };

  return (
    <div className="testimonio">
      <div className="imagen">
        <img src={modelo} alt="Testimonio de cliente" />
      </div>

      <div className="texto">
        <p>Nos encantaría saber qué piensas de nuestros productos</p>
        <p><em>Deja tu opinión</em></p>
      </div>

      <div className="formulario_2">
        <label htmlFor="nombre">Tu nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="opinion">Tu opinión:</label>
        <textarea
          id="opinion"
          placeholder="Escribe tu comentario..."
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        ></textarea>

        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Testimonials;
