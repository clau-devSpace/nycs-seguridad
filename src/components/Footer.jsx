import React from "react";
import './Footer.css';
// Asegúrate de que el import sea exacto
import { Instagram, Facebook } from "react-bootstrap-icons";
import Logo from "../assets/images/Group 6.png"

export default function Footer(){
    return(
       <footer className="footer">
        <div className="footer-content">
          <img className="logo-footer" src={Logo} alt="logo"/>
          <p>Seguinos en nuestras redes sociales   <Instagram className="social-icon" size={24} />  <Facebook className="social-icon" size={24} /> </p>
          <div className="footer-bottom">
            <p>&copy; 2025 NYC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}