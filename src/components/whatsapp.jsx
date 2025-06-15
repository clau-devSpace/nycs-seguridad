import React from "react";
import WhatsAppIcon from '../assets/images/whatsapp.svg';

export default function WhatsApp(){
    const estilos1 = {
        position: 'fixed',
        right: '10px',
        bottom: '20px'
    };

    const estilos2 = {
        width: '100px',
        height: 'auto'
    };
    return(
        <>
        <div style={estilos1}>
            <img src={WhatsAppIcon} style={estilos2} alt="Boton de whatsapp" />
        </div>
        </>
    );
}