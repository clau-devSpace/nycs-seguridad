import React from "react";
import './Footer.css';
import Logo from "../assets/images/Group 6.png"

export default function Footer(){
    return(
       <footer className="footer">
        <div className="footer-content">
          <img className="logo-footer" src={Logo} alt="logo"/>
          <p>Su seguridad es nuestra prioridad. Confíe en nosotros para proteger lo que más valora.</p>
          <div className="footer-bottom">
            <p>&copy; 2025 NYC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}
     