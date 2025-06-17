import React from "react";
import { Whatsapp } from "react-bootstrap-icons";

export default function WhatsAppBoton(){
    const estilos1 = {
        position: 'fixed',
        right: '10px',
        bottom: '20px',
        zIndex: '1000'
    };

    const estilos2 = {
        fontSize: '70px',
        color: '#ff6b35'
    };

    return(
        <>
        <div style={estilos1}>
           <Whatsapp style={estilos2} />
        </div>
        </>
    );
}