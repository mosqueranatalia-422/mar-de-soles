import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registro.css"; // estilos del formulario

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();

    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden 💫");
      return;
    }

    alert("¡Registro exitoso! 💖");
    navigate("/iniciar-sesion"); // redirige al login
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h1 className="registro-titulo">
          <span className="punto">●</span> Registro
        </h1>
        <p className="registro-subtitulo">
          Regístrate ahora y obtén acceso completo a nuestra aplicación.
        </p>

        <form className="registro-formulario" onSubmit={manejarRegistro}>
          <div className="fila">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            required
          />

          <button className="btn-enviar" type="submit">
            Registrarse
          </button>
        </form>

        <p className="nota-final">
          ¿Ya tienes una cuenta?
          <Link to="/iniciar-sesion" className="enlace-login">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
