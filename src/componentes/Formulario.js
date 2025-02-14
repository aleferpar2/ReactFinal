import React, { useState } from 'react';
import destinos from '../data/Destinos.js';

const Formulario = () => {
  const [formData, setFormData] = useState({ nombre: '', apellido1: '', apellido2: '', dni: '', telefono: '', destino1: '', destino2: '', destino3: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value === '')) {
      alert("Por favor, complete todos los campos");
    } else {
      alert("Formulario enviado con éxito");
    }
  };

  const handleReset = () => {
    setFormData({ nombre: '', apellido1: '', apellido2: '', dni: '', telefono: '', destino1: '', destino2: '', destino3: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="apellido1" placeholder="Primer Apellido" value={formData.apellido1} onChange={handleChange} required />
      <input type="text" name="apellido2" placeholder="Segundo Apellido" value={formData.apellido2} onChange={handleChange} required />
      <input type="text" name="dni" placeholder="DNI" value={formData.dni} onChange={handleChange} required />
      <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required pattern="[0-9]+" />
      
      <select name="destino1" value={formData.destino1} onChange={handleChange} required>
        <option value="">Seleccione el primer destino</option>
        {destinos.map((destino, index) => (
          <option key={index} value={destino.nombre}>{destino.nombre}</option> // Accede al 'nombre' si 'destino' es un objeto
        ))}
      </select>
      
      <select name="destino2" value={formData.destino2} onChange={handleChange} required>
        <option value="">Seleccione el segundo destino</option>
        {destinos.map((destino, index) => (
          <option key={index} value={destino.nombre}>{destino.nombre}</option> // Igual que antes
        ))}
      </select>
      
      <select name="destino3" value={formData.destino3} onChange={handleChange} required>
        <option value="">Seleccione el tercer destino</option>
        {destinos.map((destino, index) => (
          <option key={index} value={destino.nombre}>{destino.nombre}</option> // Igual que antes
        ))}
      </select>
      
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleReset}>Borrar</button>
    </form>
  );
};

export default Formulario;
