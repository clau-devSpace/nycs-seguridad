import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components/form.css';

//  CONFIGURACIÓN EMAILJS 
const EMAIL_CONFIG = {
  USER_ID: 'RkfmtJuFyfOOM7cUf',        
  SERVICE_ID: 'service_7q0t6nc',   
  TEMPLATE_ID: 'template_08sukod'  
};

emailjs.init(EMAIL_CONFIG.USER_ID);

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitType, setSubmitType] = useState(''); // 'success' o 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar configuración
    if (EMAIL_CONFIG.USER_ID === 'TU_USER_ID') {
      setSubmitMessage('⚠️ Error: Debes configurar las credenciales de EmailJS');
      setSubmitType('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Preparar los datos para EmailJS
      const templateParams = {
        from_name: `${formData.nombre} ${formData.apellido}`,
        from_email: formData.email,
        phone: formData.telefono,
        company: formData.empresa || 'No especificada',
        service: formData.servicio || 'No especificado',
        message: formData.mensaje,
        // Variables adicionales que puedes usar en tu template
        full_name: `${formData.nombre} ${formData.apellido}`,
        first_name: formData.nombre,
        last_name: formData.apellido,
        to_email: 'info@nycseguridad.com.ar' // Tu email de destino
      };

      // Enviar email
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email enviado exitosamente:', response);
      
      // Mostrar mensaje de éxito
      setSubmitMessage('✅ ¡Consulta enviada correctamente! Te responderemos a la brevedad.');
      setSubmitType('success');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        mensaje: ''
      });

    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitMessage('❌ Error al enviar la consulta. Por favor, inténtalo nuevamente.');
      setSubmitType('error');
    } finally {
      setIsSubmitting(false);
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitType('');
      }, 5000);
    }
  };

  return (
    <div className="contact-form">
      <h2>Envianos tu Consulta</h2>
      
      {submitMessage && (
        <div className={`form-message ${submitType}`}>
          {submitMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido *</label>
            <input 
              type="text" 
              id="apellido" 
              name="apellido" 
              value={formData.apellido}
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        
        <div className='form-row full-width'>
          <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <input 
              type="text" 
              id="empresa" 
              name="empresa" 
              value={formData.empresa}
              onChange={handleChange}
            />
          </div>
        </div>
       
        <div className='form-row full-width'>
          <div className="form-group">
            <label htmlFor="servicio">Servicio de Interés</label>
            <select 
              id="servicio" 
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
            >
              <option value="">Seleccione un servicio</option>
              <option value="seguridad-fisica">Seguridad Física</option>
              <option value="seguridad-electrónica">Seguridad Electrónica</option>
              <option value="investigaciones">Investigaciones</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>
       
        <div className='form-row full-width'>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Contanos sobre tu consulta o requerimiento específico..."
              required
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
              Enviando...
            </>
          ) : (
            'Enviar Consulta'
          )}
        </button>
      </form>
    </div>
  );
}