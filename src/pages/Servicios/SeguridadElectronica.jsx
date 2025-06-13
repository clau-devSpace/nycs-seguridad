import React from "react";
import './SeguridadFisica.css';

export default function SeguridadFisica(){
    return(
        <>
    {/* Service Overview Section */}
    <section className="security-service-overview">
        <div className="security-container">
            <div className="security-overview-content">
                <div className="security-overview-text">
                    <h2>Protección Integral</h2>
                    <p>Nuestro servicio de seguridad física está diseñado para brindar la máxima protección a personas, propiedades y activos. Contamos con un equipo de profesionales altamente entrenados y certificados que operan bajo los más estrictos protocolos de seguridad.</p>
                    <p>Utilizamos tecnología de última generación combinada con técnicas tradicionales de vigilancia para garantizar una cobertura completa y efectiva en todos los entornos donde prestamos nuestros servicios.</p>
                </div>
               {/* <div className="security-overview-image">
                    <div className="security-image-placeholder"></div>
                </div>*/} 
            </div>
        </div>
    </section>

    {/* Services Section - MODIFICADA */}
    <section className="security-services-section" id="servicios">
        <div className="security-container">
            <div className="security-section-title">
                <h2>Nuestras Especialidades</h2>
                <p>Servicios de seguridad física adaptados a diferentes sectores y necesidades</p>
            </div>
            <div className="security-services-grid">
                <div className="security-service-card">
                    <div className="security-service-image">
                        {/* Aquí puedes agregar: <img src="ruta-imagen-corporativa.jpg" alt="Seguridad Corporativa" /> */}
                    </div>
                    <h3>Seguridad Corporativa</h3>
                    <p>Protección integral para oficinas, edificios corporativos y centros de negocios con personal especializado en seguridad empresarial.</p>
                    <ul className="security-service-list">
                        <li>Control de acceso de empleados y visitantes</li>
                        <li>Vigilancia de instalaciones</li>
                        <li>Protección de ejecutivos</li>
                        <li>Seguridad en eventos corporativos</li>
                    </ul>
                </div>
                <div className="security-service-card">
                    <div className="security-service-image">
                        {/* Aquí puedes agregar: <img src="ruta-imagen-barrios.jpg" alt="Barrios Cerrados" /> */}
                    </div>
                    <h3>Barrios Cerrados</h3>
                    <p>Servicios especializados para urbanizaciones privadas, countries y barrios cerrados con sistemas de seguridad integrados.</p>
                    <ul className="security-service-list">
                        <li>Vigilancia perimetral 24/7</li>
                        <li>Control de ingresos vehiculares y peatonales</li>
                        <li>Patrullajes internos</li>
                        <li>Monitoreo de alarmas comunitarias</li>
                    </ul>
                </div>
                <div className="security-service-card">
                    <div className="security-service-image">
                        {/* Aquí puedes agregar: <img src="ruta-imagen-industria.jpg" alt="Industria y Comercios" /> */}
                    </div>
                    <h3>Industria y Comercios</h3>
                    <p>Soluciones de seguridad para plantas industriales, depósitos, centros comerciales y establecimientos comerciales.</p>
                    <ul className="security-service-list">
                        <li>Vigilancia industrial especializada</li>
                        <li>Protección de mercadería y activos</li>
                        <li>Control de personal y contratistas</li>
                        <li>Prevención de pérdidas</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}