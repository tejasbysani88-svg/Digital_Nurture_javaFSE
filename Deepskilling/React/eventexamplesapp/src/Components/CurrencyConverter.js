import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');
  const [resultMsg, setResultMsg] = useState('');

  // Conversion rate (1 EUR = 90 INR)
  const EXCHANGE_RATE = 90.0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rupees !== '') {
      // Convert INR to Euro
      const val = parseFloat(rupees);
      if (!isNaN(val)) {
        const result = (val / EXCHANGE_RATE).toFixed(2);
        setEuros(result);
        setResultMsg(`₹${val.toLocaleString()} Indian Rupees = €${result} Euros`);
      }
    } else if (euros !== '') {
      // Convert Euro to INR
      const val = parseFloat(euros);
      if (!isNaN(val)) {
        const result = (val * EXCHANGE_RATE).toFixed(2);
        setRupees(result);
        setResultMsg(`€${val.toLocaleString()} Euros = ₹${parseFloat(result).toLocaleString()} Indian Rupees`);
      }
    } else {
      alert("Please fill in at least one currency field to convert.");
    }
  };

  const handleClear = () => {
    setRupees('');
    setEuros('');
    setResultMsg('');
  };

  return (
    <div className="portal-card animate-fade-in" style={{ padding: '2rem', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
      <div className="card-header">
        <div className="icon-badge">💶</div>
        <h3>Rupee - Euro Converter</h3>
      </div>
      <div className="card-body">
        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Enter a value in either field and submit to convert between Indian Rupees (INR) and Euros (EUR).</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#9ca3af' }}>Indian Rupees (INR)</label>
              <input 
                type="number" 
                value={rupees} 
                onChange={(e) => { setRupees(e.target.value); setEuros(''); }}
                placeholder="₹ Amount"
                style={{
                  background: 'rgba(10, 12, 16, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#9ca3af' }}>Euros (EUR)</label>
              <input 
                type="number" 
                value={euros} 
                onChange={(e) => { setEuros(e.target.value); setRupees(''); }}
                placeholder="€ Amount"
                style={{
                  background: 'rgba(10, 12, 16, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          {resultMsg && (
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '12px', color: '#10b981', fontWeight: '600' }}>
              {resultMsg}
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button type="submit" className="cta-button" style={{ padding: '0.65rem 1.5rem', fontSize: '0.95rem', flexGrow: 1 }}>
              Convert Currency
            </button>
            <button type="button" onClick={handleClear} className="cta-button" style={{ padding: '0.65rem 1.5rem', fontSize: '0.95rem', background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow: 'none' }}>
              Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CurrencyConverter;
