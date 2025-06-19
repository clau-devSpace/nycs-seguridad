import React from "react";
import './SeguridadFisica.css';
import ImagenCamara from "../../assets/images/foto-header2.jpg";
import Alarma from "../../assets/images/bernard-hermant-Hd0m_5-OyCw-unsplash.jpg";
import Header from "../../components/Header";
import FotoHeader1 from "../../assets/images/fingerprint-4703841_1920.jpg";
import FotoHeader2 from "../../assets/images/bernard-hermant-Hd0m_5-OyCw-unsplash.jpg";
import Totem from "../../assets/images/totem.png";
import AlarmaSeguridad from "../../assets/images/alarma-seguridad.jpg"
import CtaSection from "../../components/CTA";
import WhatsAppBoton from "../../components/whatsapp";

export default function SeguridadElectronica(){
    return(
        <>
            <WhatsAppBoton />
        <Header 
                title="Seguridad Electrónica"
                subtitle="Estamos aquí para ayudarte"
                description="Equipos de seguridad de alta tecnología con monitoreo remoto las 24 horas del día, los 365 días del año."
                backgroundImage={FotoHeader1}
              />

    {/* Service Overview Section */}
    <section className="security-service-overview">
        <div className="security-container">
            <div className="security-overview-content">
                <div className="security-overview-text">
                    <h2>Tecnología Avanzada</h2>
                    <p>Nuestros sistemas de seguridad electrónica incorporan la más avanzada tecnología para brindar protección integral y monitoreo continuo. Desde sistemas de alarmas inteligentes hasta cámaras de alta definición con análisis de video, ofrecemos soluciones que se adaptan a las necesidades específicas de cada cliente.</p>
                    <p>Trabajamos con equipos de última generación que permiten el control y monitoreo remoto desde cualquier lugar del mundo, garantizando una respuesta inmediata ante cualquier eventualidad.</p>
                    <div className="security-overview-features">
                        <div className="security-feature-item">
                            <span className="security-feature-icon">📱</span>
                            <span className="security-feature-text">Monitoreo Remoto</span>
                        </div>
                        <div className="security-feature-item">
                            <span className="security-feature-icon">🔔</span>
                            <span className="security-feature-text">Alertas Inteligentes</span>
                        </div>
                        <div className="security-feature-item">
                            <span className="security-feature-icon">🎥</span>
                            <span className="security-feature-text">Video HD</span>
                        </div>
                        <div className="security-feature-item">
                            <span className="security-feature-icon">🌐</span>
                            <span className="security-feature-text">Acceso Online</span>
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
                <p>Servicios de Seguridad Electrónica adaptados a diferentes sectores y necesidades</p>
            </div>
            
            <div className="security-services-clean">
                {/* Servicio 1 - Sistema de Alarmas */}
                <div className="security-service-row">
                    <div className="service-content">
                        <h3>Sistemas de Alarmas Inteligentes</h3>
                        <p className="service-description">Tecnología de última generación para la detección temprana de intrusos y protección integral de su propiedad.</p>
                        
                        <ul className="service-features">
                            <li>Sensores de movimiento de alta precisión</li>
                            <li>Activación y desactivación mediante códigos personalizados</li>
                            <li>Notificaciones inmediatas a dispositivos móviles</li>
                            <li>Integración con sistemas de monitoreo 24/7</li>
                        </ul>
                        
                        <p className="service-additional">La función de un sistema de alarma es advertir el allanamiento en el inmueble, para poder garantizar la seguridad de personas y bienes. Nuestros sistemas electrónicos se activan mediante clave personalizada y se disparan en el momento en que los sensores detectan algún movimiento fuera de lo común.</p>
                    </div>
                    <div>
                        <img src={AlarmaSeguridad} alt="Sistema de alarmas" className="service-image" />
                    </div>
                </div>

                {/* Servicio 2 - Video Cámaras */}
                <div className="security-service-row">
                    <div className="service-content">
                        <h3>Sistemas de Video Vigilancia Avanzada</h3>
                        <p className="service-description">Cámaras de seguridad IP y CCTV con acceso remoto para monitoreo continuo desde cualquier lugar del mundo.</p>
                        
                        <ul className="service-features">
                            <li>Cámaras IP de alta definición</li>
                            <li>Sistemas CCTV con grabación continua</li>
                            <li>Acceso remoto desde PC y dispositivos móviles</li>
                            <li>Visión nocturna y detección de movimiento</li>
                        </ul>
                        
                        <p className="service-additional">Las cámaras de seguridad instaladas pueden ser IP y CCTV, mediante las mismas se puede controlar su hogar y empresa desde cualquier lugar del mundo, las 24 hs del día, a través de internet mediante una PC, o con su dispositivo móvil iPhone, Android, Windows mobile, etc.</p>
                    </div>
                    <div>
                        <img src={ImagenCamara} alt="Cámaras de seguridad" className="service-image" />
                    </div>
                </div>

                {/* Servicio 3 - Control de Accesos */}
                <div className="security-service-row">
                    <div className="service-content">
                        <h3>Totem Vigilador Virtual</h3>
                        <p className="service-description">Nuestro Totem de Seguridad combina tecnologías avanzadas y un diseño robusto para brindar máxima seguridad. Características destacadas:</p>
                        
                        <ul className="service-features">
                            <li>Vigilador en vivo</li>
                            <li>Pantalla HD integrada</li>
                            <li>Audio bidireccional</li>
                            <li>Activación Automática</li>
                            <li>Control de acceso</li>
                            <li>Respuesta inmediata</li>
                        </ul>
                        
                        <p className="service-additional">Ofrecemos variados sistemas de control de accesos: tarjetas, huellas dactilares, teclados, molinetes, etc., en conjunto con software de última generación que dan soporte y registro escrito sobre los movimientos del lugar, garantizando un control total de los accesos.</p>
                    </div>
                    <div>
                        <img src={Totem} alt="Control de accesos" className="service-image totem" />
                    </div>
                </div>

                  <div className="security-service-row">
                    <div className="service-content">
                        <h3>Control de Accesos Biométrico y Digital</h3>
                        <p className="service-description">Sistemas avanzados de control de acceso con múltiples métodos de identificación y software de gestión integral.</p>
                        
                        <ul className="service-features">
                            <li>Sistemas de tarjetas inteligentes</li>
                            <li>Lectores de huellas dactilares</li>
                            <li>Teclados de código y molinetes</li>
                            <li>Software de gestión y reportes detallados</li>
                        </ul>
                        
                        <p className="service-additional">Ofrecemos variados sistemas de control de accesos: tarjetas, huellas dactilares, teclados, molinetes, etc., en conjunto con software de última generación que dan soporte y registro escrito sobre los movimientos del lugar, garantizando un control total de los accesos.</p>
                    </div>
                    <div>
                        <img src={FotoHeader1} alt="Control de accesos" className="service-image" />
                    </div>
                </div>
            </div>

        </div>
    </section>
    
    <CtaSection />
        </>
    );
}