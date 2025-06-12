import React, { useState } from 'react';
import Logo from '../assets/images/Group 6.png';
import { useNavbar } from '../hooks/useNavbar';
import './Navbar.css';

const Navbar = () => {
  const { navBackground, handleSmoothScroll } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (e, target) => {
    handleSmoothScroll(e, target);
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic
  };

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
          <img src={Logo} className='logotipo' alt='logo'/>
        </a>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#inicio" onClick={(e) => handleMenuClick(e, '#inicio')}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={(e) => handleMenuClick(e, '#servicios')}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={(e) => handleMenuClick(e, '#nosotros')}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleMenuClick(e, '#contacto')}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;