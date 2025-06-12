import React from 'react';
import Logo from '../assets/images/Logo-definitivo-nick.png';
import { useNavbar } from '../hooks/useNavbar';

const Navbar = () => {
  const { navBackground, handleSmoothScroll } = useNavbar();
  return (
    <nav
      className="navbar"
      style={{
        background: navBackground
          ? 'linear-gradient(135deg, rgba(74, 74, 74, 0.95), rgba(90, 90, 90, 0.95))'
          : 'linear-gradient(135deg, #4a4a4a, #5a5a5a)'
      }}
    >
      <div className="nav-container">
        <a href="#" className="logo">
          <img src={Logo} alt='logo'/>
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, '#inicio')}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={(e) => handleSmoothScroll(e, '#servicios')}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={(e) => handleSmoothScroll(e, '#nosotros')}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;