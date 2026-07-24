import React from 'react';
import OfficeRental from './Components/OfficeRental';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        {/* Render Office Rental component */}
        <OfficeRental />

        <footer className="App-footer" style={{ marginTop: '4rem' }}>
          <p>Created for Digital Nurture Java FSE • React Lab Part 2</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
