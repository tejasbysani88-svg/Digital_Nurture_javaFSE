import React, { useState } from 'react';

const BookingSystem = ({ selectedFlight, onBackClick }) => {
  const [passengerName, setPassengerName] = useState('');
  const [seatPref, setSeatPref] = useState('Window');
  const [bookedStatus, setBookedStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passengerName.trim() === '') {
      alert("Passenger Name is required to book a ticket.");
      return;
    }
    setBookedStatus(true);
  };

  return (
    <div className="portal-card animate-fade-in" style={{ padding: '2rem', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="icon-badge">✈️</div>
          <h3>Confirm Your Booking</h3>
        </div>
        <button 
          className="cta-button" 
          onClick={onBackClick}
          style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow: 'none' }}
        >
          Back to Flights
        </button>
      </div>
      
      <div className="card-body">
        {bookedStatus ? (
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '2rem', borderRadius: '16px', color: '#10b981', textAlign: 'center' }}>
            <span style={{ fontSize: '3rem' }}>🎉</span>
            <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#fff' }}>Ticket Booked Successfully!</h3>
            <p style={{ color: '#9ca3af', margin: '0 0 1.5rem 0' }}>Your booking reference for <strong>{selectedFlight.id}</strong> ({selectedFlight.route}) has been generated.</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', textAlign: 'left', maxWidth: '320px', margin: '0 auto', color: '#fff' }}>
              <p style={{ margin: '0 0 0.5rem 0' }}><strong>Passenger:</strong> {passengerName}</p>
              <p style={{ margin: '0 0 0.5rem 0' }}><strong>Seat Selection:</strong> {seatPref}</p>
              <p style={{ margin: 0 }}><strong>Fare Paid:</strong> ₹{selectedFlight.price.toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase' }}>Selected Flight</span>
              <h4 style={{ margin: '0.25rem 0', color: '#fff', fontSize: '1.2rem' }}>{selectedFlight.route} ({selectedFlight.id})</h4>
              <p style={{ margin: 0, color: '#61dafb', fontSize: '0.9rem' }}>Fare: ₹{selectedFlight.price.toLocaleString()}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#9ca3af' }}>Passenger Full Name</label>
              <input 
                type="text" 
                value={passengerName} 
                onChange={(e) => setPassengerName(e.target.value)} 
                placeholder="Enter passenger name"
                style={{
                  background: 'rgba(10, 12, 16, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '0.75rem 1.15rem',
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#9ca3af' }}>Seat Preference</label>
              <select 
                value={seatPref} 
                onChange={(e) => setSeatPref(e.target.value)}
                style={{
                  background: 'rgba(10, 12, 16, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '0.75rem 1.15rem',
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  fontSize: '1rem'
                }}
              >
                <option value="Window">Window Seat</option>
                <option value="Aisle">Aisle Seat</option>
                <option value="Middle">Middle Seat</option>
              </select>
            </div>

            <button type="submit" className="cta-button" style={{ marginTop: '0.5rem', padding: '0.75rem' }}>
              Purchase Flight Ticket
            </button>

          </form>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
