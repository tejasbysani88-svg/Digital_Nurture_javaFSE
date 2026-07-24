import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Calculators & Metrics</div>
        <h1 className="main-title">Student Performance Hub</h1>
        <p className="subtitle">
          An interactive analyzer for academic achievements and goal margins.
        </p>

        {/* Invoke CalculateScore component with props */}
        <CalculateScore 
          Name="Sarah Jenkins" 
          School="Elite Science Academy" 
          Total={440} 
          goal={500} 
        />

        <footer className="App-footer">
          <p>Created for Digital Nurture Java FSE • React Lab Session 3</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
