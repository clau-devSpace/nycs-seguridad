import React from 'react';

const GoogleMapEmbed = () => {
  const mapStyles = {
    width: '100%',
    height: '400px',
    border: '0'
  };

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.840979357724!2d-58.46166222494481!3d-34.58289005639735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e11752ae61%3A0x38847e7238ac4b55!2sLatinSec!5e0!3m2!1ses!2sar!4v1749689492114!5m2!1ses!2sar"
      style={mapStyles}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de ubicación LatinSec"
    />
  );
};

export default GoogleMapEmbed;