import React from "react";
import './Footer.css';
// Asegúrate de que el import sea exacto
import { Instagram, Facebook } from "react-bootstrap-icons";
import Logo from "../assets/images/Group 21.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="flex-items">
          <img className="logo-footer" src={Logo} alt="logo" />
          <div className="redes-sociales">
            <p>Seguinos en nuestras redes sociales</p>
            <div className="iconos-redes">
            <Instagram className="social-icon" />
            <Facebook className="social-icon" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 NYC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}