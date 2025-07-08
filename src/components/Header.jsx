import React from "react";
import './Header.css';

function Header({ 
  title, 
  description,
  backgroundImage1,
  backgroundImage2,
  backgroundImage, // Para usar una sola imagen
  className
}) {
  // Determinar qué clase CSS usar
  const getSectionClass = () => {
    let baseClass = 'page-header-section';
    
    if (backgroundImage1 && backgroundImage2) {
      baseClass += ' with-double-bg';
    }
    
    if (className) {
      baseClass += ` ${className}`;
    }
    
    return baseClass;
  };

  // Estilo SOLO para la imagen (sin backgroundSize, backgroundPosition, backgroundRepeat)
  const singleImageStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`
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
          style={hasBackgroundImage ? { color: 'rgba(255,255,255,0.9)' } : {}}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default Header;