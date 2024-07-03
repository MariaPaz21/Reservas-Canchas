import React from 'react';
import './CanchaCard.css';
import { FaCoins } from "react-icons/fa6";

const CanchaCard = ({ cancha, onClick }) => {
  return (
    <div className="cancha-card" onClick={onClick}>
      <h2>{cancha.name}</h2>
      <div className="cancha-card__image">
        <div className={`status ${cancha.available ? 'green' : 'red'}`}></div>
      </div>
       <p> <FaCoins className='coin'/>
        ${cancha.price}/h</p>
    </div>
  );
};

export default CanchaCard;

