import React from 'react';
import './Contacto.css';
import { MapPin, PhoneCall, Mail, Clock} from 'lucide-react';
import Form from'../components/form.jsx';
import GoogleMapEmbed from '../components/mapa.jsx'; 
import Header from '../components/Header.jsx';
import HeaderImage1 from '../assets/images/foto-header1.jpg';
import HeaderImage2 from '../assets/images/foto-header2.jpg';
import ImagenContacto from '../assets/images/edicion1.jpg';
import CtaSection from '../components/CTA.jsx';
import WhatsAppBoton from '../components/whatsapp.jsx';

export default function Contacto() {
  return (
    <>
      <WhatsAppBoton />
      <Header 
        title="Contacto"
        description="Contáctate con nosotros para recibir asesoramiento personalizado sobre nuestros servicios de seguridad. Nuestro equipo está disponible para responder todas tus consultas."
        backgroundImage={ImagenContacto}
      />

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
                        España 1055<br />
                        U9000 - Comodoro Rivadavia, Chubut
                      </p>
                    ),
                    icon: <MapPin />
                  },
                  {
                    title: "Teléfonos",
                    content: (
                      <p>
                        <a href="tel:+541143219999">4467937</a>
                      </p>
                    ),
                    icon: <PhoneCall />
                  },
                  {
                    title: "Email",
                    content: (
                      <p>
                        <a href="mailto:info@nycseguridad.com.ar">info@nycseguridad.com.ar</a>
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
            <h2>Nuestra Ubicación</h2>
          </div>
          <div className="contact-map-container">
            <div className="contact-map-placeholder">
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};