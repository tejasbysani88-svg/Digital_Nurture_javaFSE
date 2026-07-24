import React from 'react';

const FlightDashboard = ({ isLoggedIn, onBookClick }) => {
  const flights = [
    { id: 'AI-102', airline: 'Air India', route: 'Delhi (DEL) ➔ Mumbai (BOM)', time: '08:00 AM - 10:15 AM', price: 5500 },
    { id: 'IG-205', airline: 'IndiGo', route: 'Bangalore (BLR) ➔ Delhi (DEL)', time: '11:30 AM - 02:10 PM', price: 6200 },
    { id: 'SG-309', airline: 'SpiceJet', route: 'Mumbai (BOM) ➔ Chennai (MAA)', time: '04:45 PM - 06:30 PM', price: 4800 },
    { id: 'UK-412', airline: 'Vistara', route: 'Kolkata (CCU) ➔ Bangalore (BLR)', time: '07:15 PM - 09:50 PM', price: 7100 }
  ];

  return (
    <div style={{ width: '100%' }}>
      <h3 style={{ color: '#fff', textAlign: 'left', marginBottom: '1.25rem' }}>Available Flights</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
        {flights.map((flight) => (
          <div key={flight.id} className="portal-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#61dafb', background: 'rgba(97,218,251,0.08)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                  {flight.id}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>{flight.airline}</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', margin: '0 0 0.5rem 0' }}>{flight.route}</h4>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', margin: '0 0 1rem 0' }}>🕒 {flight.time}</p>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af', display: 'block' }}>One-Way Price</span>
                <strong style={{ fontSize: '1.2rem', color: '#fff' }}>₹{flight.price.toLocaleString()}</strong>
              </div>
              {isLoggedIn ? (
                <button 
                  className="cta-button" 
                  onClick={() => onBookClick(flight)}
                  style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                >
                  Book Ticket
                </button>
              ) : (
                <span style={{ fontSize: '0.8rem', color: '#ef4444', background: 'rgba(239,68,68,0.08)', padding: '0.35rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.15)' }}>
                  Login to Book
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDashboard;
