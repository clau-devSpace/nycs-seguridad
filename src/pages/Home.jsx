import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Camera, Truck } from 'lucide-react';
import './Home.css'; // Importar el archivo CSS

const SecurePro = () => {
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  // Effect para el scroll del navbar
  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect para animar las estadísticas
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            animateStats();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
      const finalValue = stat.textContent;
      if (finalValue.includes('+')) {
        const numValue = parseInt(finalValue.replace('+', ''));
        animateValue(stat, 0, numValue, 2000, '+');
      } else if (finalValue.includes('%')) {
        const numValue = parseInt(finalValue.replace('%', ''));
        animateValue(stat, 0, numValue, 2000, '%');
      }
    });
  };

  const animateValue = (element, start, end, duration, suffix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      element.textContent = currentValue + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar"
        style={{
          background: navBackground
            ? 'linear-gradient(135deg, rgba(74, 74, 74, 0.95), rgba(90, 90, 90, 0.95))'
            : 'linear-gradient(135deg, #4a4a4a, #5a5a5a)'
        }}
      >
        <div className="nav-container">
          <a href="#" className="logo">SecurePro</a>
          <ul className="nav-menu">
            <li><a href="#inicio" onClick={(e) => handleSmoothScroll(e, '#inicio')}>Inicio</a></li>
            <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, '#servicios')}>Servicios</a></li>
            <li><a href="#nosotros" onClick={(e) => handleSmoothScroll(e, '#nosotros')}>Nosotros</a></li>
            <li><a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>Seguridad Integral</h1>
          <p className="hero-subtitle">Protección Profesional 24/7</p>
          <p>Brindamos servicios de seguridad privada, electrónica y custodia de mercadería con los más altos estándares de calidad y profesionalismo.</p>
          <a href="#servicios" className="cta-button" onClick={(e) => handleSmoothScroll(e, '#servicios')}>
            Conocer Servicios
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="servicios">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p>Soluciones integrales de seguridad adaptadas a sus necesidades específicas</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <ShieldCheck size={40} />
              </div>
              <h3>Seguridad Física</h3>
              <p>Detalles</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Camera size={40} />
              </div>
              <h3>Investigación</h3>
              <p>Detalles</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Truck size={40} />
              </div>
              <h3>Seguridad Electrónica</h3>
              <p>Detalles</p>
            </div>
             <div className="service-card">
              <div className="service-icon">
                <Truck size={40} />
              </div>
              <h3>Servicios Complementarios</h3>
              <p>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="nosotros">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre Nosotros</h2>
              <p>Con más de 15 años de experiencia en el sector de la seguridad, somos una empresa líder que se dedica a brindar soluciones integrales de protección a empresas y particulares.</p>
              <p>Nuestro equipo está formado por profesionales altamente capacitados y certificados, comprometidos con la excelencia en el servicio y la innovación constante en tecnologías de seguridad.</p>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Personal Calificado</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Tecnología Avanzada</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Respuesta Inmediata</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Soporte 24/7</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Atención Continua</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Profesionalismo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" id="contacto">
        <div className="map-container">
          <div className="section-title">
            <h2>Nuestra Ubicación</h2>
            <p>Encuéntranos y contáctanos para una consulta personalizada</p>
          </div>
          <div className="map-content">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <h4>Dirección</h4>
                  <p>Av. Principal 1234<br />Buenos Aires, Argentina</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <h4>Teléfono</h4>
                  <p>+54 11 1234-5678</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>info@securepro.com.ar</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div className="contact-details">
                  <h4>Horarios</h4>
                  <p>Atención 24/7<br />Oficinas: Lun-Vie 8:00-18:00</p>
                </div>
              </div>
            </div>
            <div className="map-placeholder">
              {/* Aquí se integraría el mapa real */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>SecurePro</h3>
          <p>Su seguridad es nuestra prioridad. Confíe en nosotros para proteger lo que más valora.</p>
          <div className="footer-bottom">
            <p>&copy; 2025 SecurePro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecurePro;