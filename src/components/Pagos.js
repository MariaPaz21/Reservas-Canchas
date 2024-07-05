import React from 'react';
import './Pagos.css';
import { FaCoins } from "react-icons/fa6";

function Pagos({ pagos, goToHome }) {
  return (
    <div className="pagos">
      <h2>Pagos Realizados</h2>
      {pagos.length === 0 ? (
        <div className="no-pagos">
          <p>No has realizado pagos por el momento, vuelve a "Home" para empezar a reservar y pagar.</p>
          <button className='volver' onClick={goToHome}>Volver</button>
        </div>
      ) : (
        <ul>
          {pagos.map((pago, index) => (
            <li key={index} className="pago">
              <div className='grid grid-cols-4 gap-3'>
                <div className='cancha'>
                  {pago.cancha}
                </div>
                <div className='precio'>
                  <span>
                    <FaCoins className='coin' />
                    ${pago.precio}
                  </span>
                </div>
                <div className='fecha'>
                  {pago.fecha}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {pagos.length > 0 && <button className='volver' onClick={goToHome}>Volver</button>}
    </div>
  );
}

export default Pagos;
