import React from "react";
import './SeguridadFisica.css';

export default function Investigacion(){
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
        </>
    );
}