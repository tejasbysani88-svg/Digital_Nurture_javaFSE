import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Student Management Portal</div>
        <h1 className="main-title">Student Portal Dashboard</h1>
        
        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveTab('all')}
          >
            Show All Components
          </button>
          <button 
            className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`} 
            onClick={() => setActiveTab('home')}
          >
            Home View
          </button>
          <button 
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`} 
            onClick={() => setActiveTab('about')}
          >
            About View
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`} 
            onClick={() => setActiveTab('contact')}
          >
            Contact View
          </button>
        </div>

        {/* Dynamic component rendering based on selection */}
        <div className="portal-content">
          {(activeTab === 'all' || activeTab === 'home') && <Home />}
          {(activeTab === 'all' || activeTab === 'about') && <About />}
          {(activeTab === 'all' || activeTab === 'contact') && <Contact />}
        </div>

        <footer className="App-footer">
          <p>Created for Digital Nurture Java FSE • React Lab Session 2</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
