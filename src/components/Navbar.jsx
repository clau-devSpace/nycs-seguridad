import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Group 6.png';
import { useNavbar } from '../hooks/useNavbar';
import './Navbar.css';

const Navbar = () => {
  const { navBackground, handleSmoothScroll } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <li className="nav-item">
            <Link to="#inicio" onClick={(e) => handleMenuClick(e, '#inicio')}>
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
                <a href="#seguridad-fisica" onClick={(e) => handleDropdownClick(e, '#seguridad-fisica')}>
                  Seguridad Física
                </a>
              </li>
              <li>
                <a href="#investigacion" onClick={(e) => handleDropdownClick(e, '#investigacion')}>
                  Investigación
                </a>
              </li>
              <li>
                <a href="#seguridad-electronica" onClick={(e) => handleDropdownClick(e, '#seguridad-electronica')}>
                  Seguridad Electrónica
                </a>
              </li>
              <li>
                <a href="#servicios-complementarios" onClick={(e) => handleDropdownClick(e, '#servicios-complementarios')}>
                  Servicios Complementarios
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
            <Link to="/contacto">
             Contacto
             </Link>
             
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;