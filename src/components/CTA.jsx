import React from 'react';
import './CTA.css';

const CtaSection = () => {
  const handleWhatsAppClick = () => {
    // Aquí puedes agregar analytics o tracking
    console.log('Botón de WhatsApp clickeado');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          ¿Necesitas servicios de seguridad profesional?
        </h2>
        
        <p className="cta-description">
          Con más de 20 años de experiencia, ofrecemos soluciones de seguridad 
          personalizadas para empresas y particulares. Contáctanos para una consulta 
          gratuita.
        </p>

        <a 
          href="https://wa.me/5491123456789" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button"
          onClick={handleWhatsAppClick}
        >
          <span className="cta-button__content">
            <span className="cta-button__text">Contáctanos</span>
          </span>
          <span className="cta-button__overlay"></span>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;