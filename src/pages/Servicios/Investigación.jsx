import React from "react";
import './SeguridadFisica.css';
import Header from "../../components/Header";
import ImagenHeader4 from "../../assets/images/imagen-header-5.JPG";
import Libro from "../../assets/images/open-book-1428428_1280.jpg";
import ImagenInvestigacion from "../../assets/images/ux-indonesia-ywwuOBJy60c-unsplash.jpg";
import CtaSection from "../../components/CTA";
import WhatsAppBoton from "../../components/whatsapp";


export default function Investigación(){
    return (
      <>
        <WhatsAppBoton />
        <Header
          title="Investigaciones"
          subtitle="Estamos aquí para ayudarte"
          description="Investigaciones especializadas para cada caso, a cargo de personal altamente calificado"
          backgroundImage={Libro}
        />
        {/* Service Overview Section */}
        <section className="security-service-overview">
          <div className="security-container">
            <div className="security-overview-content">
              <div className="security-overview-text">
                <h2>Investigaciones</h2>
                <p>
                  En NYC contamos con un equipo especializado dedicado a
                  ejecutar investigaciones integrales, abarcando tanto el ámbito
                  empresarial como asuntos de carácter privado. Las
                  organizaciones frecuentemente enfrentan eventos adversos que
                  impactan directamente sus activos fundamentales: capital
                  humano, infraestructura física, bienes, datos confidenciales y
                  prestigio institucional, comprometiendo así el cumplimiento de
                  sus metas organizacionales y, en ocasiones, poniendo en riesgo
                  la viabilidad operativa de la empresa.
                </p>
                <p>
                  Una investigación tiene como propósito establecer de forma
                  exhaustiva y fidedigna los hechos relacionados con un evento
                  específico, determinando si hubo comportamientos irregulares,
                  identificando las condiciones bajo las cuales ocurrieron,
                  estableciendo la identidad de los implicados y verificando si
                  se transgredieron normativas legales o políticas internas de
                  la organización
                </p>
              </div>
            </div>
          </div>
        </section>
        <CtaSection />
      </>
    );
}