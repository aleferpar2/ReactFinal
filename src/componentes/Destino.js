import React, { useState } from 'react';
import destinos from '../data/Destinos';

const Destino = () => {
  const [indice, setIndice] = useState(0);
  const destino = destinos[indice];

  const siguiente = () => {
    if (indice < destinos.length - 1) setIndice(indice + 1);
  };

  const anterior = () => {
    if (indice > 0) setIndice(indice - 1);
  };

  return (
    <div className="destino-container">
      <h1>Votación para el viaje de fin de curso</h1>
      <h2>{destino.nombre}</h2>
      <img src={destino.foto} alt={destino.nombre} />
      <p>{destino.descripcion}</p>
      <p>Precio: {destino.precio}€</p>
      <button onClick={anterior} disabled={indice === 0}>Anterior</button>
      <button onClick={siguiente} disabled={indice === destinos.length - 1}>Siguiente</button>
    </div>
  );
};

export default Destino;
