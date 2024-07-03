import React, { useState } from 'react';
import './CanchaDrawer.css';
import { persona } from '../canchasData';
import toast, { Toaster } from 'react-hot-toast';

function CanchaDrawer({ cancha, onClose }) {
  const [selectedTime, setSelectedTime] = useState('');
  const [reservationMessage, setReservationMessage] = useState('');

  const getBackgroundColor = (time) => {
    const hour = parseInt(time.split(':')[0], 10);
    if (hour <= 6) {
      return '#FFD700'; 
    } else if (hour < 12) {
      return '#91ff99'; 
    } else if (hour < 17) {
      return '#7db8f0'; 
    } else {
      return '#ffadd3'; 
    }
  };

  const getPersonName = (personId) => {
    const person = persona.find(p => p.id === personId);
    return person ? person.name : 'Desconocido';
  };

  const notify = () => {
    setReservationMessage('Reserva realizada con éxito para ' + selectedTime);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="success-icon"
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p>{reservationMessage}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button className="not-button" onClick={() => toast.dismiss(t.id)}></button>
        </div>
      </div>
    ))
    
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <Toaster />
        <button className="close-button" onClick={onClose}></button>
        <h2>{cancha.name}</h2>
        <div className="cancha-image"></div>
        <h3>Disponibilidad</h3>
        <p>{cancha.available ? 'Disponible' : 'No disponible'}</p>
        <h3>Descripcion</h3>
        <p>{cancha.descripcion}</p>
        {!cancha.available && (
          <>
            <h3>Reservado por</h3>
            <p>{getPersonName(cancha.person)}</p>
          </>
        )}
        <h3>Horarios</h3>
        <ul>
          {cancha.availableTimes.map((time, index) => (
            <li
              key={index}
              style={{ backgroundColor: getBackgroundColor(time) }}
              onClick={() => setSelectedTime(time)}
              className={selectedTime === time ? 'selected' : ''}
            >
              {time}
            </li>
          ))}
        </ul>
        <button
          disabled={!cancha.available || !selectedTime}
          onClick={notify}
          className={!cancha.available || !selectedTime ? 'disabled' : 'able'}
        >
          Reservar
        </button>
        <button className='cancel' onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default CanchaDrawer;