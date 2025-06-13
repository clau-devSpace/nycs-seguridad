import React from "react";
import './Header.css';

function Header({ 
  title, 
  subtitle, 
  description,
  backgroundImage1,
  backgroundImage2,
  backgroundImage // Para usar una sola imagen
}) {
  // Determinar qué clase CSS usar
  const getSectionClass = () => {
    if (backgroundImage1 && backgroundImage2) {
      return 'page-header-section with-double-bg';
    }
    return 'page-header-section';
  };

  // Estilo para una sola imagen
  const singleImageStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  // Determinar si usar estilos de texto blanco (cuando hay imagen de fondo)
  const hasBackgroundImage = backgroundImage || (backgroundImage1 && backgroundImage2);

  return (
    <section 
      className={getSectionClass()}
      style={singleImageStyle}
    >
      {/* Renderizar las dos imágenes como elementos separados si están presentes */}
      {backgroundImage1 && backgroundImage2 && (
        <>
          <div 
            className="header-bg-left"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          />
          <div 
            className="header-bg-right"
            style={{ backgroundImage: `url(${backgroundImage2})` }}
          />
        </>
      )}
      
      <div className="page-header-content">
        
        <h1 
          style={hasBackgroundImage ? { color: 'white' } : {}}
        >
          {title}
        </h1>
        
        <p 
          className="page-header-subtitle"
          style={hasBackgroundImage ? { 
            color: '#ff6b35', 
            background: 'rgba(255,255,255,0.1)', 
            padding: '0.2rem 0.8rem', 
            borderRadius: '20px', 
            display: 'inline-block' 
          } : {}}
        >
          {subtitle}
        </p>
        
        <p 
          style={hasBackgroundImage ? { color: 'rgba(255,255,255,0.9)' } : {}}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default Header;