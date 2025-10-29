import React from "react";
import logo from "../assets/img/logo.jpeg";
import cart from "../assets/img/bolsa-2.png";
import userIcon from "../assets/img/usuario.png";

const Header = () => {
  return (
    <header className="encabezado">
      
      <nav className="titulo">
  <a className="titu" href="/">Inicio</a>
  <a className="titu" href="/promociones">Promociones</a>
  <a className="titu" href="/opiniones">Opiniones</a>
  <button className="cerrar-sesion" onClick={() => alert("Sesión cerrada")}>
    Cerrar sesión
  </button>
  <img className="cart" src={cart} alt="Carrito" />
  <img
    onClick={() => (window.location.href = "/registro")}
    className="cart_2"
    src={userIcon}
    alt="Usuario"
  />
</nav>



      <img className="img" src={logo} alt="Logo empresa" />
      <h2 className="slogan">Realza tu belleza <br /> natural de tu piel</h2>
      <h3 className="DESCUBRE">
        Descubre productos de skincare que nutren y revitalizan
      </h3>
    </header>
  );
};

export default Header;
