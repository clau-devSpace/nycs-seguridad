import React from "react";
import './SeguridadFisica.css';
import Header from "../../components/Header";
import Edicion1 from "../../assets/images/edicion1.jpg";
import Edicion2 from "../../assets/images/edicion2.jpeg";
import Edicion3 from "../../assets/images/image-slider-2.jpg";
import ImagenPersonal from "../../assets/images/image-slider-3.JPG";
import ImagenCard1 from "../../assets/images/seguridad-fisica-1.jpeg";
import ImagenCard2 from "../../assets/images/image-slider-6.jpeg";
import CtaSection from "../../components/CTA";
import WhatsAppBoton from "../../components/whatsapp";

export default function SeguridadFisica(){
    return(
        <>
          <WhatsAppBoton />
          <Header 
                title="Seguridad Física"
                description="Protección confiable con personal altamente capacitado y tecnología avanzada. Custodia y vigilancia profesional las 24 horas del día, los 365 días del año."
                backgroundImage={Edicion3}
                
              />
              
    {/* Service Overview Section */}
    <section className="security-service-overview">
        <div className="security-container">
            <div className="security-overview-content">
                <div className="security-overview-text">
                    <h2>Protección Integral</h2>
                    <p>Nuestro servicio de seguridad física está diseñado para brindar la máxima protección a personas, propiedades y activos. Contamos con un equipo de profesionales altamente entrenados y certificados que operan bajo los más estrictos protocolos de seguridad.</p>
                    <p>Utilizamos tecnología de última generación combinada con técnicas tradicionales de vigilancia para garantizar una cobertura completa y efectiva en todos los entornos donde prestamos nuestros servicios.</p>
                    <div className="security-overview-features">
                        <div className="security-feature-item">
                            <span className="security-feature-icon">🎯</span>
                            <span className="security-feature-text">Vigilancia Especializada</span>
                        </div>
                        <div className="security-feature-item">
                            <span className="security-feature-icon">⚡</span>
                            <span className="security-feature-text">Respuesta Inmediata</span>
                        </div>
                        <div className="security-feature-item">
                            <span className="security-feature-icon">📋</span>
                            <span className="security-feature-text">Protocolos Certificados</span>
                        </div>
                        <div className="security-feature-item">
                            <span className="security-feature-icon">🔒</span>
                            <span className="security-feature-text">Control de Acceso</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Services Section - Diseño Horizontal */}
    <section className="security-services-section" id="servicios">
        <div className="security-container">
            <div className="security-section-title">
                <h2>Nuestras Especialidades</h2>
                <p>Servicios de seguridad física adaptados a diferentes sectores y necesidades</p>
            </div>
            
            <div className="security-services-clean">
                {/* Servicio 1 - Seguridad Corporativa */}
                <div className="security-service-row">
                    <div className="service-content">
                        <h3>Seguridad Corporativa de Alto Nivel</h3>
                        <p className="service-description">Protección a Empresas y Locaciones Corporativas</p>
                        
                        <ul className="service-features">
                            <li>Personal calificado y con entrenamiento continuo</li>
                            <li>Vigilancia de instalaciones corporativas</li>
                            <li>Protección ejecutiva personalizada</li>
                            <li>Seguridad especializada para eventos</li>
                        </ul>
                    </div>
                    <div>
                        <img src={ImagenCard1} alt="Seguridad Corporativa" className="service-image" />
                    </div>
                </div>

                {/* Servicio 2 - Barrios Cerrados */}
                <div className="security-service-row">
                    <div className="service-content">
                        <h3>Protección integral para barrios cerrados y urbanizaciones privadas</h3>
                        <p className="service-description">Servicios especializados que garantizan la tranquilidad y seguridad de las familias en comunidades residenciales exclusivas.</p>
                        
                        <ul className="service-features">
                            <li>Vigilancia perimetral las 24 horas del día</li>
                            <li>Control de acceso vehicular y peatonal</li>
                            <li>Patrullajes internos programados y aleatorios</li>
                            <li>Monitoreo de sistemas de alarmas comunitarias</li>
                        </ul>
                        
                        <p className="service-additional">Nuestro equipo especializado en seguridad residencial cuenta con protocolos específicos para entornos familiares, garantizando discreción y eficiencia en cada intervención. Trabajamos en coordinación con las administraciones de los barrios para mantener los más altos estándares de seguridad.</p>
                    </div>
                    <div>
                        <img src={ImagenCard2} alt="Seguridad Barrios Cerrados" className="service-image" />
                    </div>
                </div>

                {/* Servicio 3 - Industria y Comercios */}
                <div className="security-service-row">
                    <div className="service-content">
                        <h3>Soluciones para Empresas e Industrias</h3>
                        <p className="service-description">Soluciones personalizadas para empresas petroleras y de energía</p>
                        
                        <ul className="service-features">
                            <li>Vigilancia industrial con personal certificado</li>
                            <li>Protección de mercadería y activos de alto valor</li>
                            <li>Control riguroso de personal y contratistas</li>
                            <li>Control de pérdidas</li>
                        </ul>
                        
                        <p className="service-additional">Entendemos que cada industria tiene sus particularidades y riesgos específicos. Por eso desarrollamos planes de seguridad personalizados que se integran perfectamente con los procesos operativos de cada cliente, sin interrumpir la productividad.</p>
                    </div>
                    <div>
                        <img src={Edicion3} alt="Seguridad Industrial" className="service-image" />
                    </div>
                </div>
            </div>

        </div>
    </section>
    
    <CtaSection />
        </>
    );
}