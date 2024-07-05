import React, { useState } from 'react';
import './App.css';
import { canchas } from './canchasData';
import CanchaCard from './components/CanchaCard';
import CanchaDrawer from './components/CanchaDrawer';
import Reservas from './components/Reservas';

function App() {
  const [selectedCancha, setSelectedCancha] = useState(null);
  const [selectedTime1, setSelectedTime1] = useState('');
  const [selectedTime2, setSelectedTime2] = useState('');
  const [filteredCanchas, setFilteredCanchas] = useState(canchas);
  const [availableFilter, setAvailableFilter] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [currentView, setCurrentView] = useState('home');

  const handleTimeChange1 = (event) => {
    setSelectedTime1(event.target.value);
  };

  const handleTimeChange2 = (event) => {
    setSelectedTime2(event.target.value);
  };

  const handleFilterClick = () => {
    let filtered = canchas;

    if (selectedTime1 && selectedTime2) {
      filtered = filtered.filter(cancha => {
        return cancha.availableTimes.some(time => time >= selectedTime1 && time <= selectedTime2);
      });
    }

    if (availableFilter !== null) {
      filtered = filtered.filter(cancha => cancha.available === availableFilter);
    }

    setFilteredCanchas(filtered);
  };

  const handleClearClick = () => {
    setSelectedTime1('');
    setSelectedTime2('');
    setAvailableFilter(null);
    setFilteredCanchas(canchas);
  };

  const handleAvailableFilterClick = (available) => {
    setAvailableFilter(available);
    handleFilterClick();
  };

  const handleHomeClick = () => {
    setSelectedCancha(null);
    setSelectedTime1('');
    setSelectedTime2('');
    setAvailableFilter(null);
    setFilteredCanchas(canchas);
    setCurrentView('home');
  };

  const addReserva = (reserva) => {
    setReservas([...reservas, reserva]);
  };

  const handlePayment = (index) => {
    const newReservas = [...reservas];
    newReservas[index].pagado = true;
    setReservas(newReservas);
  };

  const renderHomeView = () => (
    <div>
      <div className="filter-section">
        <div className="time-filter">
          <label htmlFor="time1">Visualizar canchas en el horario desde:</label>
          <div>
            <input type="time" id="time1" name="time1" value={selectedTime1} onChange={handleTimeChange1} />
            <label htmlFor="time2"> hasta: </label>
            <input type="time" id="time2" name="time2" value={selectedTime2} onChange={handleTimeChange2} />
          </div>
        </div>

        <div className="button-container">
          <button onClick={handleFilterClick}>Filtrar</button>
          <button onClick={handleClearClick}>Limpiar</button>
          <button onClick={() => handleAvailableFilterClick(true)}>Disponibles</button>
          <button onClick={() => handleAvailableFilterClick(false)}>No Disponibles</button>
        </div>
      </div>
      <p className='filter-p'>Se muestran las canchas con horarios disponibles de {selectedTime1} a {selectedTime2}.</p>
      <div className="canchas-grid">
        {filteredCanchas.map((cancha) => (
          <CanchaCard key={cancha.id} cancha={cancha} onClick={() => setSelectedCancha(cancha)} />
        ))}
      </div>
      {selectedCancha && (
        <CanchaDrawer cancha={selectedCancha} onClose={() => setSelectedCancha(null)} addReserva={addReserva} />
      )}
    </div>
  );

  const renderReservasView = () => (
    <Reservas reservas={reservas} handlePayment={handlePayment} goToHome={() => setCurrentView('home')} />
  );

  return (
    <div className="App">
      <header>
        <h1>Mi cancha REACT</h1>
      </header>
      {currentView === 'home' ? renderHomeView() : renderReservasView()}
      <div className="menu-bottom">
        <button onClick={() => alert('Pagos')}>Pagos</button>
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={() => setCurrentView('reservas')}>Reservas</button>
      </div>
    </div>
  );
}

export default App;
