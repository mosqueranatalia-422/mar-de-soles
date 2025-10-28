import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="encabezado">
      <nav className="titulo">
        <Link to="/inicio">Inicio</Link>
        <Link className="titu" to="/promociones">Promociones</Link>
        <Link className="titu" to="/opiniones">Opiniones</Link>

        <img className="cart" src="/img/bolsa-2.png" alt="Carrito" />
        <img
          onClick={() => (window.location.href = "/registro")}
          className="cart_2"
          src="/img/usuario.png"
          alt="Usuario"
        />
        <button className="titu" id="cerrarSesion" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
}
