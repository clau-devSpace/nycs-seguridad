import React from 'react';

const GoogleMapEmbed = () => {
  const mapStyles = {
    width: '650px',
    height: '400px',
    border: '0'
  };

  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5936536632967!2d-67.48856812422584!3d-45.859431235184076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde45453f78edf0d%3A0xe95241b7a8748174!2sEspa%C3%B1a%201055%2C%20U9000%20Comodoro%20Rivadavia%2C%20Chubut!5e0!3m2!1ses!2sar!4v1749958353449!5m2!1ses!2sar"
      style={mapStyles}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de ubicación LatinSec"
    />
  );
};

export default GoogleMapEmbed;