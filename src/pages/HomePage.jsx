import React from "react";
import "../components/Header.css";

export default function HomePage() {
  return (
    <main>
      <img className="img" src="/img/logo.jpeg" alt="logo empresa" />
      <h2 className="slogan">
        Realza tu belleza <br /> natural de tu piel
      </h2>
      <h3 className="DESCUBRE">
        Descubre productos de skincare que nutren y revitalizan
      </h3>

      <div className="botones-contenedor">
        <a
          href="/img/Catalogo mar de soles_20250815_110306_0000.pdf"
          className="btn btn-ver"
        >
          VER PRODUCTOS
        </a>
        <a
          href="https://www.instagram.com/mardesoles_skin"
          className="btn btn-compra"
        >
          COMPRAR AHORA
        </a>
      </div>

      {/* iconos */}
      <div className="iconos-lista">
        <div className="icono-item">
          <img src="/img/icons8-entrega.gif" alt="Envíos a todo el país" />
          <p>Envios a todo el pais</p>
        </div>
        <div className="icono-item">
          <img src="/img/icons8-planta-50.png" alt="Productos naturales" />
          <p>Productos naturales</p>
        </div>
        <div className="icono-item">
          <img src="/img/metodo de pago.png" alt="Pago seguro" />
          <p>Pago seguro</p>
        </div>
      </div>
    </main>
  );
}
