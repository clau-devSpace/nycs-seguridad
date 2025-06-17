import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Group 6.png';
import Logo2 from '../assets/images/Group 7.png'
import { useNavbar } from '../hooks/useNavbar';
import './Navbar.css';

const Navbar = () => {
  const { navBackground, handleSmoothScroll } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (e, target) => {
    handleSmoothScroll(e, target);
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic
    setIsDropdownOpen(false); // Cerrar el dropdown también
  };

  const handleDropdownClick = (e, target) => {
    e.preventDefault();
    handleSmoothScroll(e, target);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Hacer scroll al inicio cuando cambia la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Función para manejar clics en los Links
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        background: '#ff6b35 !important', // Color fijo naranja
        // resto de estilos...
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
          <li className="nav-item">
            <Link to="/home" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          
          <li className={`nav-item has-dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
            <a 
              href="#servicios" 
              onClick={(e) => {
                if (window.innerWidth > 768) {
                  handleMenuClick(e, '#servicios');
                } else {
                  e.preventDefault();
                  toggleDropdown();
                }
              }}
            >
              Servicios
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="servicios/seguridad-fisica" onClick={handleLinkClick}>
                 Seguridad Física
                </Link>
              </li>
              <li>
                <Link to="servicios/investigacion" onClick={handleLinkClick}>
                 Investigación
                </Link>
              </li>
              <li>
                <Link to="servicios/seguridad-electronica" onClick={handleLinkClick}>
                 Seguridad Electrónica
                </Link>
              </li>
              <li>
                <a href="#servicios-complementarios" onClick={(e) => handleDropdownClick(e, '#servicios-complementarios')}>
                  Servicios Generales
                </a>
              </li>
            </ul>
          </li>
          
          <li className="nav-item">
            <a href="#nosotros" onClick={(e) => handleMenuClick(e, '#nosotros')}>
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <Link to="/contacto" onClick={handleLinkClick}>
             Contacto
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;