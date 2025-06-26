import React, { useState, useEffect } from 'react';
import EnergiaDelSur from '../assets/images/logoEnergiadelSur.png';
import Pecom from '../assets/images/pecom_color_logotipo.svg';
import Novomet from '../assets/images/novomet-logo.png';
import Crane from '../assets/images/logo-crane.svg';
import Ulterra from '../assets/images/Ulterra-logo.jpeg';
import Geovial from '../assets/images/geovial.jpg';
import GrupoDragon from '../assets/images/Grupo Dragon_ Logo Negro.png';
import styles from './sliderEmpresas.module.css';

export default function SliderEmpresas() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    { src: Novomet, alt: "Novomet" },
    { src: Pecom, alt: "Pecom" },
    { src: EnergiaDelSur, alt: "Energia del Sur" },
    { src: Crane, alt: "Crane" },
    { src: Ulterra, alt: "Ulterra" },
    { src: GrupoDragon, alt: "Grupo Dragon" },
    { src: Geovial, alt: "Geovial" }
  ];

  const getSlidesPerView = () => {
    if (windowWidth >= 1024) return 5;
    if (windowWidth >= 768) return 4;
    if (windowWidth >= 640) return 3;
    return 1;
  };

  const slidesPerView = getSlidesPerView();
  
  return (
    <div className={styles.sliderContainer}>
      <div 
        className={styles.sliderTrack}
        style={{
          '--slides-per-view': slidesPerView,
          '--total-slides': logos.length * 2,
        }}
      >
        {/* Primera set de logos */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className={styles.slideItem}>
            <img 
              className={styles.logoEmpresa} 
              src={logo.src} 
              alt={logo.alt} 
            />
          </div>
        ))}
        
        {/* Segunda set de logos para loop infinito */}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className={styles.slideItem}>
            <img 
              className={styles.logoEmpresa} 
              src={logo.src} 
              alt={logo.alt} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}