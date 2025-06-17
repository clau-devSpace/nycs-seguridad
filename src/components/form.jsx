import React from 'react';
import '../components/form.css';

export default function Form() {
  return (
    <div className="contact-form">
      <h2>Envianos tu Consulta</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido *</label>
            <input type="text" id="apellido" name="apellido" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>
        </div>
        
        <div className='form-row full-width'>
           <div className="form-group">
          <label htmlFor="empresa">Empresa</label>
          <input type="text" id="empresa" name="empresa" />
        </div>
        </div>
       
        <div className='form-row full-width'>
           <div className="form-group">
          <label htmlFor="servicio">Servicio de Interés</label>
          <select id="servicio" name="servicio">
            <option value="">Seleccione un servicio</option>
            <option value="seguridad-fisica">Seguridad Física</option>
            <option value="monitoreo-alarmas">Seguridad Electrónica</option>
            <option value="seguridad-electronica">Investigación</option>
            <option value="seguridad-corporativa">Otros</option>
          </select>
        </div>
        </div>
       
       <div className='form-row full-width'>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Contanos sobre tu consulta o requerimiento específico..."
            required
          ></textarea>
        </div>
       </div>

        <button type="submit" className="submit-btn">
          Enviar Consulta
        </button>
      </form>
    </div>
  );
}