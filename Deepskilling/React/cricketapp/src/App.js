import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">ES6 & React Labs</div>
        <h1 className="main-title">Cricket Squad Selector</h1>
        
        {/* Toggle controls */}
        <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            className="cta-button" 
            onClick={() => setFlag(!flag)}
            style={{ minWidth: '220px' }}
          >
            Toggle Flag (Current: {flag ? 'True' : 'False'})
          </button>
          <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            {flag ? 'Showing ListofPlayers (map & filter)' : 'Showing IndianPlayers (destructuring & merge)'}
          </span>
        </div>

        {/* Conditional Rendering using if-else logic structure */}
        <div style={{ width: '100%' }}>
          {flag ? <ListofPlayers /> : <IndianPlayers />}
        </div>

        <footer className="App-footer" style={{ marginTop: '4rem' }}>
          <p>Created for Digital Nurture Java FSE • React Lab Part 2</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
