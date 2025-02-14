import React, { useState } from 'react';
import destinos from '../data/Destinos.js';

const Formulario = () => {
  const [formData, setFormData] = useState({ nombre: '', apellido1: '', apellido2: '', dni: '', telefono: '', destino1: '', destino2: '', destino3: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
    setFormData({ nombre: '', apellido1: '', apellido2: '', dni: '', telefono: '', destino1: '', destino2: '', destino3: ''});
  };

  const { nombre, apellido1, apellido2, dni, telefono, destino1, destino2, destino3 } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={handleChange} required />
      <input type="text" name="apellido1" placeholder="Primer Apellido" value={apellido1} onChange={handleChange} required />
      <input type="text" name="apellido2" placeholder="Segundo Apellido" value={apellido2} onChange={handleChange} required />
      <input type="text" name="dni" placeholder="DNI" value={dni} onChange={handleChange} required />
      <input type="number" name="telefono" placeholder="Teléfono" value={telefono} onChange={handleChange} required />
      
      <select name="destino1" value={destino1} onChange={handleChange} required>
        <option value="">Seleccione el primer destino</option>
        {destinos.map((destino, index) => (
          <option key={index} value={destino.nombre}>{destino.nombre}</option>
        ))}
      </select>
      
      <select name="destino2" disabled={!destino1 }value={destino2} onChange={handleChange} required>
        <option value="">Seleccione el segundo destino</option>
        
        {destinos.filter((destino) => destino.nombre !== destino1).map((destino, index) => (
          <option key={index} value={destino.nombre}>{destino.nombre}</option>
        ))}
      </select>
      
      <select name="destino3" disabled={!destino2} value={destino3} onChange={handleChange} required>
        <option value="">Seleccione el tercer destino</option>
        {destinos.filter((destino) => destino.nombre !== destino1  && destino.nombre !== destino2).map((destino, index) => (
          <option key={index} value={destino.nombre}>{destino.nombre}</option>
        ))}
      </select>
      
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleReset}>Borrar</button>
    </form>
  );
};

export default Formulario;