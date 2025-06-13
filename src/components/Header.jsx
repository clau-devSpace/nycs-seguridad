function Header({ 
  currentPage, 
  title, 
  subtitle, 
  description,
  backgroundImage1,
  backgroundImage2
}) {
  const sectionStyle = backgroundImage1 && backgroundImage2 ? {
    backgroundImage: `linear-gradient(to right, 
      url(${backgroundImage1}) 0% 50%, 
      url(${backgroundImage2}) 50% 100%)`,
    backgroundSize: '50% 100%, 50% 100%',
    backgroundPosition: 'left center, right center',
    backgroundRepeat: 'no-repeat, no-repeat'
  } : {};

  return (
    <section 
      className="page-header-section" 
      style={sectionStyle}
    >
      <div className="page-header-content">
        <div className="page-breadcrumb-nav">
          <a href="#">Inicio</a>
          <span>/</span>
          <span>{currentPage}</span>
        </div>
        <h1>{title}</h1>
        <p className="page-header-subtitle">{subtitle}</p>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Header;