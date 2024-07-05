import React from 'react';
import './Reservas.css';
import { FaCoins } from "react-icons/fa6";

function Reservas({ reservas, handlePayment, goToHome }) {
  return (
    <div className="reservas">
      <h2>Mis Reservas</h2>
      {reservas.length === 0 ? (
        <div className="no-reservas">
          <p>No has reservado canchas por el momento, vuelve a "Home" para empezar a reservar.</p>
          <button className='volver' onClick={goToHome}>Volver</button>
        </div>
      ) : (
        <ul>
          {reservas.map((reserva, index) => (
            <li key={index} className="reserva">
              <div className='grid grid-cols-4 gap-3'>
                <div className='cancha'>
                  {reserva.cancha}
                </div>
                <div className='horario'>
                  {reserva.horario}
                </div>
                <div className='precio'>
                  <span>
                    <FaCoins className='coin' />
                    ${reserva.precio}
                  </span>
                </div>
                <div className='estado'>
                  {reserva.pagado ? (
                    <span>Pagado</span>
                  ) : (
                    <button className='pagar' onClick={() => handlePayment(index)}>Pagar</button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {reservas.length > 0 && <button className='volver' onClick={goToHome}>Volver</button>}
    </div>
  );
}

export default Reservas;
