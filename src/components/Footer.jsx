import React from "react";
import twitter from "../assets/img/twiter (2).png";
import facebook from "../assets/img/facebook (2).png";
import gmail from "../assets/img/gmail (2).png";
import instagram from "../assets/img/intagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-2">
        <img className="imagenes" src={twitter} alt="Twitter" />
        <img className="imagenes" src={facebook} alt="Facebook" />
        <img className="imagenes" src={gmail} alt="Gmail" />
        <a
          href="https://www.instagram.com/mardesoles_skin/?igsh=MWw5cHN3N3g0YThmMw%3D%3D&utm_source=qr#"
          target="_blank"
          rel="noreferrer"
        >
          <img className="imagenes" src={instagram} alt="Instagram" />
        </a>
      </article>
      <p className="copyright">
        © 2025 Mar De Soles | Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
