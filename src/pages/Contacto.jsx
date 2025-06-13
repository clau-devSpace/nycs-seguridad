import React from 'react';
import './Contacto.css';
import { MapPin, PhoneCall, Mail, Clock} from 'lucide-react';
import Form from'../components/form.jsx';

export default function Contacto() {
  return (
    <>
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <div className="contact-breadcrumb-nav">
            <a href="#">Inicio</a>
            <span>/</span>
            <span>Contacto</span>
          </div>
          <h1>Contacto</h1>
          <p className="contact-hero-subtitle">Estamos Aquí para Ayudarte</p>
          <p>Ponete en contacto con nosotros para recibir asesoramiento personalizado sobre nuestros servicios de seguridad. Nuestro equipo está disponible para responder todas tus consultas.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info-section">
        <div className="contact-main-container">
          <div className="contact-info-grid">
            <div className="contact-info-panel">
              <h2>Información de Contacto</h2>

              <div className="contact-info-consolidated">
                {[
                  {
                    title: "Oficina Central",
                    content: (
                      <p>
                        Av. Corrientes 1234, Piso 8<br />
                        C1043AAZ - Buenos Aires, Argentina
                      </p>
                    ),
                    icon: <MapPin />
                  },
                  {
                    title: "Teléfonos",
                    content: (
                      <p>
                        <a href="tel:+541143216543">+54 11 4321-6543</a> / 
                        <a href="tel:+541143216544"> 4321-6544</a><br />
                        <strong>Emergencias 24hs:</strong> <a href="tel:+541143219999">4321-9999</a>
                      </p>
                    ),
                    icon: <PhoneCall />
                  },
                  {
                    title: "Email",
                    content: (
                      <p>
                        <a href="mailto:info@securepro.com.ar">info@securepro.com.ar</a><br />
                        <a href="mailto:ventas@securepro.com.ar">ventas@securepro.com.ar</a>
                      </p>
                    ),
                    icon: <Mail />
                  },
                  {
                    title: "Horarios de Atención",
                    content: (
                      <p>
                        <strong>Lun-Vie:</strong> 8:00 - 18:00 hs<br />
                        <strong>Sáb:</strong> 9:00 - 13:00 hs
                      </p>
                    ),
                    icon: <Clock />
                  }
                ].map(({ title, content, icon }, index) => (
                  <div className="contact-info-item" key={index}>
                    <div className="contact-info-icon" aria-hidden="true">
                      <span>{icon}</span>
                    </div>
                    <div className="contact-info-details">
                      <h3>{title}</h3>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-main-container">
          <div className="contact-section-title">
            <h2>Nuestras Ubicaciones</h2>
            <p>Encontranos en nuestras oficinas ubicadas estratégicamente en Buenos Aires</p>
          </div>
          <div className="contact-map-container">
            <div className="contact-map-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer-content">
          <h3>SecurePro</h3>
          <p>Tu seguridad es nuestra prioridad. Servicios profesionales de seguridad integral.</p>
        </div>
        <div className="contact-footer-bottom">
          <p>&copy; 2024 SecurePro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};