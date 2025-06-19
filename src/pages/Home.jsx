import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Camera, Truck, Search, Grid2x2} from 'lucide-react';
import './Home.css'; // Importar el archivo CSS
import GoogleMapEmbed from '../components/mapa';
import Slider from '../components/Slider';
import Logo from '../assets/images/Logo-definitivo-nick.png';
import WhatsApp from '../components/whatsapp';
import WhatsAppBoton from '../components/whatsapp';
import CtaSection from '../components/CTA';

const SecurePro = () => {
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

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
      {/* Hero Section */}
      <WhatsAppBoton />
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>Seguridad Integral</h1>
          <p className="hero-subtitle">Protección Profesional 24/7</p>
          <p>Brindamos servicios de seguridad privada con los más altos estándares de calidad y profesionalismo.</p>
          <a href="#servicios" className="cta-boton" onClick={(e) => handleSmoothScroll(e, '#servicios')}>
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
              <p><Link to="/servicios/seguridad-fisica">Detalles</Link></p>
            </div>
            <div className="service-card">
              <div className="service-icon">
               <Search size={40}/>
              </div>
              <h3>Investigación de casos</h3>
              <p><Link to="/servicios/investigacion">Detalles</Link></p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Camera size={40} />
              </div>
              <h3>Seguridad Electrónica</h3>
              <p><Link to="/servicios/seguridad-electronica">Detalles</Link></p>
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
              <p>Con más de 20 años de experiencia en el sector de la seguridad, somos una empresa líder que se dedica a brindar soluciones integrales de protección a empresas y particulares.</p>
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
              <div className="about-placeholder">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">20+</span>
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
          </div>
            <div className="map-placeholder">
              <GoogleMapEmbed />
            </div>
        </div>
        <div>
          <img className="boton-whatsapp" src='../assets/images/whatsapp.png'/>
        </div>
      </section>

      <CtaSection />
      
    </div>


  );
};

export default SecurePro;