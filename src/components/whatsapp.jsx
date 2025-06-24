import React from "react";
import { Whatsapp } from "react-bootstrap-icons";

export default function WhatsAppBoton(){
    const estilos1 = {
        position: 'fixed',
        right: '20px',
        bottom: '30px',
        zIndex: '1000',
        textAlign: 'right',
        alignItems: 'right',
    };

    const estilos2 = {
        fontSize: '60px',
        color: '#ff6b35',
        cursor: 'pointer'
    };

    const estilos3 = {
        fontSize: '14px',
        color: 'white',
        backgroundColor: '#ff6b35',
        padding: '5px 10px',
        borderRadius: '100px',
        marginBottom: '10px'
    };

    return(
        <>
        <div style={estilos1}>
           {/*<p style={estilos3}>Estamos aquí para ayudarte</p> */} 
           <Whatsapp style={estilos2} />
        </div>
        </>
    );
}