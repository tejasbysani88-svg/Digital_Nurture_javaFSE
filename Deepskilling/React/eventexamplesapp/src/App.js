import React, { useState } from 'react';
import CounterEvents from './Components/CounterEvents';
import CurrencyConverter from './Components/CurrencyConverter';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Event Handling & State</div>
        <h1 className="main-title">React Event Hub</h1>
        <p className="subtitle">
          Explore interactive counter triggers, custom arguments, synthetic events, and currency converters.
        </p>

        {/* Tab Selection */}
        <div className="nav-tabs" style={{ marginBottom: '2.5rem' }}>
          <button 
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Form & Counter Events
          </button>
          <button 
            className={`tab-btn ${activeTab === 'converter' ? 'active' : ''}`}
            onClick={() => setActiveTab('converter')}
          >
            Currency Converter
          </button>
        </div>

        {/* Active Tab View */}
        <div style={{ width: '100%', maxWidth: '800px' }}>
          {activeTab === 'events' ? <CounterEvents /> : <CurrencyConverter />}
        </div>

        <footer className="App-footer" style={{ marginTop: '4rem' }}>
          <p>Created for Digital Nurture Java FSE • React Lab Part 2</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
