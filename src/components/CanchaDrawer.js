import React from 'react';
import './CanchaDrawer.css';

const CanchaDrawer = ({ cancha, onClose }) => {
  return (
    <div className="drawer-backdrop">
      <div className="drawer">
        <button onClick={onClose} class="close-button"></button>
        <h2>{cancha.name}</h2>
        <div className="cancha-image"/>
        <h4>Precio: </h4>
        <p> ${cancha.price}/h</p>
        <h4>Disponibilidad: </h4>
        <p>{cancha.available ? 'Disponible' : 'No Disponible'}</p>
        <h4>Descripcion: </h4>
        <p>{cancha.descripcion}</p>
      </div>
    </div>
  );
};

export default CanchaDrawer;
