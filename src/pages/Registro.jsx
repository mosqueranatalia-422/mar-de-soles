import React from "react";

function Registro() {
  return (
    <div className="registro-container">
      <h1>Registro de Usuario</h1>
      <form className="registro-form">
        <label>Nombre completo:</label>
        <input type="text" placeholder="Ingresa tu nombre" />

        <label>Correo electrónico:</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña:</label>
        <input type="password" placeholder="Crea una contraseña" />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
