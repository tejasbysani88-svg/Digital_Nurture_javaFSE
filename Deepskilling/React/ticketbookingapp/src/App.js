import React, { useState } from 'react';
import FlightDashboard from './Components/FlightDashboard';
import BookingSystem from './Components/BookingSystem';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedFlight(null); // Clear active bookings on logout
  };

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Safe Travels Agency</div>
        <h1 className="main-title">AeroBook Flight Portal</h1>
        
        {/* Auth Navbar Bar */}
        <div className="portal-card" style={{ 
          width: '100%', 
          maxWidth: '850px', 
          padding: '1rem 2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2.5rem', 
          boxSizing: 'border-box' 
        }}>
          <div>
            {isLoggedIn ? (
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>
                🟢 Logged in as: <strong>Registered Traveler</strong>
              </span>
            ) : (
              <span style={{ color: '#f3f4f6' }}>
                ⚪ Logged in as: <strong>Guest User</strong>
              </span>
            )}
          </div>
          <div>
            {isLoggedIn ? (
              <button 
                className="cta-button" 
                onClick={handleLogout}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#ef4444', boxShadow: 'none' }}
              >
                Log Out
              </button>
            ) : (
              <button 
                className="cta-button" 
                onClick={handleLogin}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                Sign In / Log In
              </button>
            )}
          </div>
        </div>

        {/* Conditional rendering block */}
        <div style={{ width: '100%', maxWidth: '850px' }}>
          {selectedFlight ? (
            <BookingSystem 
              selectedFlight={selectedFlight} 
              onBackClick={() => setSelectedFlight(null)} 
            />
          ) : (
            <FlightDashboard 
              isLoggedIn={isLoggedIn} 
              onBookClick={(flight) => setSelectedFlight(flight)} 
            />
          )}
        </div>

        <footer className="App-footer" style={{ marginTop: '4rem' }}>
          <p>Created for Digital Nurture Java FSE • React Lab Part 2</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
