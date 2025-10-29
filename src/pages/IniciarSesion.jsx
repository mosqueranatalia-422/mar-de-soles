import React, { useState } from "react";
import "./IniciarSesion.css";


const IniciarSesion = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("usuarioLogeado", username);
      window.location.href = "/";
    } else {
      alert("Credenciales incorrectas...");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">MardeSoles</h1>
        <h2 className="titulo">Inicia sesión en tu cuenta</h2>

        <div className="inputBox">
          <input
            id="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="Username">Usuario</label>
        </div>

        <div className="inputBox">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña</label>
        </div>

        <button className="enter" onClick={iniciarSesion}>
          Iniciar sesión
        </button>

        <div className="extra-links">
          <a href="#" id="olvidaste">¿Olvidaste tu contraseña?</a>
          <a href="/registro">Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
