import React, { useState } from 'react';
import CanchaCard from './CanchaCard';
import './CanchaList.css';

const CanchaList = ({ canchas, onCanchaClick }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <div>
      <h1>Mi cancha REACT</h1>
      <div>
        <label>
          Visualizar canchas en el horario:
          <input
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <input
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </label>
        <button>Filtrar</button>
        <button>Limpiar</button>
      </div>
      <p>
        Se muestran las canchas con horarios disponibles de {startTime} a {endTime}
      </p>
      <div className="container">
        <div className="cancha-list">
          {canchas.map((cancha) => (
            <CanchaCard key={cancha.id} cancha={cancha} onClick={() => onCanchaClick(cancha)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanchaList;
