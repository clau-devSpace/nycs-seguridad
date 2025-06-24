import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Group 6.png';
import Logo2 from '../assets/images/Group 7.png'
import Logo3 from '../assets/images/Group 21.png';
import { useNavbar } from '../hooks/useNavbar';
import './Navbar.css';

const Navbar = () => {
  const { navBackground, handleSmoothScroll } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (e, target) => {
    handleSmoothScroll(e, target);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = (e, target) => {
    e.preventDefault();
    handleSmoothScroll(e, target);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Nueva función para manejar navegación a secciones
  const handleSectionNavigation = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    // Si estamos en la página principal (/home), hacer scroll directo
    if (location.pathname === '/home' || location.pathname === '/') {
      handleSmoothScroll(e, sectionId);
    } else {
      // Si estamos en otra página, navegar primero a home y luego hacer scroll
      navigate('/home');
      // Pequeño delay para asegurar que la página se cargue antes del scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
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
          <img src={Logo3} className='logotipo' alt='logo'/>
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

           <li className="nav-item">
            <a href="#nosotros" onClick={(e) => handleSectionNavigation(e, '#nosotros')}>
              Nosotros
            </a>
           </li>
          
          <li className={`nav-item has-dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
            <a 
              href="#servicios" 
              onClick={(e) => {
                if (window.innerWidth > 768) {
                  handleSectionNavigation(e, '#servicios');
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
                <Link to="servicios/seguridad-electronica" onClick={handleLinkClick}>
                 Seguridad Electrónica
                </Link>
              </li>
              <li>
                <Link to="servicios/investigacion" onClick={handleLinkClick}>
                 Investigaciones
                </Link>
              </li>
            </ul>
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