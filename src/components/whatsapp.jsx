import React from "react";
import { Whatsapp } from "react-bootstrap-icons";

export default function WhatsAppBoton(){
    const estilos1 = {
        position: 'fixed',
        right: '20px',
        bottom: '30px',
        zIndex: '1000'
    };

    const estilos2 = {
        fontSize: '60px',
        color: '#ff6b35',
        cursor: 'pointer'
    };

    return(
        <>
        <div style={estilos1}>
           <Whatsapp style={estilos2} />
        </div>
        </>
    );
}