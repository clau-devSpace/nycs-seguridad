import React from "react";
import './SeguridadFisica.css';
import ImagenCamara from "../../assets/images/foto-header2.jpg";
import Alarma from "../../assets/images/bernard-hermant-Hd0m_5-OyCw-unsplash.jpg";
import Header from "../../components/Header";
import FotoHeader1 from "../../assets/images/fingerprint-4703841_1920.jpg";
import FotoHeader2 from "../../assets/images/bernard-hermant-Hd0m_5-OyCw-unsplash.jpg"


export default function SeguridadElectronica(){
    return(
        <>
        <Header 
                title="Seguridad Electrónica"
                subtitle="Estamos aquí para ayudarte"
                description="Equipos de seguridad de alta tecnología con monitoreo remoto."
                backgroundImage1={FotoHeader1}
                backgroundImage2={FotoHeader2}
              />
    {/* Service Overview Section */}

    {/* Services Section - MODIFICADA */}
    <section className="security-services-section" id="servicios">
        <div className="security-container">
            <div className="security-section-title">
                <h2>Nuestras Especialidades</h2>
                <p>Servicios de Seguridad Electrónica adaptados a diferentes sectores y necesidades</p>
            </div>
            <div className="security-services-grid">
                <div className="security-service-card">
                    <div className="security-service-image">
                      <img src={Alarma} alt="alarma" />
                    </div>
                    <h3>Sistema de alarmas</h3>
                    <p>La función de un sistema de alarma es advertir el allanamiento en el inmueble, para poder garantizar la seguridad de personas y bienes, en general consiste en un sistema electrónico, el cual es activado mediante una clave y se disparan en el momento en que los sensores detectan algún movimiento fuera de lo común</p>
                </div>
                <div className="security-service-card">
                    <div className="security-service-image">
                        <img src={ImagenCamara} alt="camara de seguridad" />
                    </div>
                    <h3>Video Camaras</h3>
                    <p>Las cámaras de seguridad instaladas pueden ser IP y CCTV, mediante las mismas se puede controlar su hogar y empresa desde cualquier lugar del mundo, las 24 hs del día, a través de internet mediante una PC, o con su dispositivo móvil iPhone, Android, Windows mobile, etc.</p>
                </div>
                <div className="security-service-card">
                    <div className="security-service-image">
                         <img src={Alarma} alt="control de accesos" />
                    </div>
                    <h3>Control de Accesos</h3>
                    <p>Ofrecemos variados sistemas de control de accesos, tarjetas, huellas dactilares, teclados, molinetes, etc, en conjunto con software de última generación que dan soporte y registro escrito sobre los movimientos del lugar.</p>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}