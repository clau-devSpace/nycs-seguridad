import React from 'react';
import './Contacto.css';

export default function Contacto() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="breadcrumb">
            <a href="#">Inicio</a>
            <span>/</span>
            <span>Contacto</span>
          </div>
          <h1>Contacto</h1>
          <p className="hero-subtitle">Estamos Aquí para Ayudarte</p>
          <p>Ponete en contacto con nosotros para recibir asesoramiento personalizado sobre nuestros servicios de seguridad. Nuestro equipo está disponible para responder todas tus consultas.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Información de Contacto</h2>

              {[
                {
                  title: "Oficina Central",
                  content: (
                    <p>
                      Av. Corrientes 1234, Piso 8<br />
                      C1043AAZ - Buenos Aires<br />
                      Argentina
                    </p>
                  ),
                  icon: "📍"
                },
                {
                  title: "Sucursal Zona Norte",
                  content: (
                    <p>
                      Av. del Libertador 5678<br />
                      B1636DSO - Olivos, Buenos Aires<br />
                      Argentina
                    </p>
                  ),
                  icon: "📍"
                },
                {
                  title: "Teléfono Principal",
                  content: (
                    <p>
                      <a href="tel:+541143216543">+54 11 4321-6543</a><br />
                      <a href="tel:+541143216544">+54 11 4321-6544</a>
                    </p>
                  ),
                  icon: "📞"
                },
                {
                  title: "Emergencias 24hs",
                  content: (
                    <p>
                      <a href="tel:+541143219999">+54 11 4321-9999</a><br />
                      Línea directa disponible las 24 horas
                    </p>
                  ),
                  icon: "📞"
                },
                {
                  title: "Email",
                  content: (
                    <p>
                      <a href="mailto:info@securepro.com.ar">info@securepro.com.ar</a><br />
                      <a href="mailto:ventas@securepro.com.ar">ventas@securepro.com.ar</a>
                    </p>
                  ),
                  icon: "✉️"
                },
                {
                  title: "Horarios de Atención",
                  content: (
                    <p>
                      Lunes a Viernes: 8:00 - 18:00 hs<br />
                      Sábados: 9:00 - 13:00 hs<br />
                      Domingos: Solo emergencias
                    </p>
                  ),
                  icon: "🕒"
                }
              ].map(({ title, content, icon }, index) => (
                <div className="contact-item" key={index}>
                  <div className="contact-icon" aria-hidden="true">
                    <span>{icon}</span>
                  </div>
                  <div className="contact-details">
                    <h3>{title}</h3>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          
           <Form />
           
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-title">
            <h2>Nuestras Ubicaciones</h2>
            <p>Encontranos en nuestras oficinas ubicadas estratégicamente en Buenos Aires</p>
          </div>
          <div className="map-container">
            <div className="map-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>SecurePro</h3>
          <p>Tu seguridad es nuestra prioridad. Servicios profesionales de seguridad integral.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SecurePro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

