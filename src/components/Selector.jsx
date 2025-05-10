import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './styles/selector.css';

export default function Selector() {
  const navigate = useNavigate();
  const [selectedSalon, setSelectedSalon] = useState('');

  const handleSelect = (e) => {
    setSelectedSalon(e.target.value);
  };

  const handleButtonClick = () => {
    if (selectedSalon) {
      navigate(`/palmas/${selectedSalon}`);
    } else {
      alert("Por favor selecciona un salón.");
    }
  };

  return (
    <div className="layout">

      <main className="main">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Selecciona un Salón de Palmas</h2>
            <p className="card-subtitle">Consulta los detalles del salón</p>
          </div>
          <div className="card-body">
            <select id="salon-select" className="salon-select" value={selectedSalon}onChange={handleSelect} >
              <option value="">Seleccione un salón</option>
              <option value="pl-1.1">pl-1.1</option>
              <option value="pl-1.2">pl-1.2</option>
              <option value="pl-1.3">pl-1.3</option>
              <option value="pl-1.4">pl-1.4</option>
              <option value="pl-1.5">pl-1.5</option>
              <option value="pl-1.6">pl-1.6</option>
              
            </select>
            <button className="button-select" onClick={handleButtonClick}>
              Ver Salón
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
