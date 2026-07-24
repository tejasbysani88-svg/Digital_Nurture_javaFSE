import React, { useState } from 'react';

const CounterEvents = () => {
  const [counter, setCounter] = useState(0);
  const [helloMsg, setHelloMsg] = useState('');

  // Multi-method invocation on Increment
  const handleIncrement = () => {
    // Method 1: Increment state
    setCounter(prev => prev + 1);
    // Method 2: Say Hello followed by a static message
    alert("Hello! Welcome to the counter service. State counter has been updated.");
    setHelloMsg("Hello! Welcome to the counter service.");
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  // Welcome message with argument passing
  const sayWelcome = (arg) => {
    alert(`Function invoked with argument: "${arg}"`);
  };

  // Synthetic event onPress / onClick handler
  const handleSyntheticEvent = (e) => {
    alert(`Synthetic Event Hook!\nEvent Type: ${e.type}\nElement Tag: ${e.target.tagName}\nAction: I was clicked`);
  };

  return (
    <div className="portal-card animate-fade-in" style={{ padding: '2rem', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
      <div className="card-header">
        <div className="icon-badge">⚡</div>
        <h3>Interactive Event Handlers</h3>
      </div>
      <div className="card-body">
        {/* Section 1: Dual method increment counter */}
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.5rem' }}>
          <h4 style={{ color: '#fff', marginTop: 0 }}>1. Multiple Method Counter</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>The Increment button triggers both state incrementation and a greeting alert.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '1rem 0' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#61dafb' }}>{counter}</span>
            <button className="cta-button" onClick={handleIncrement} style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Increment (Dual Call)</button>
            <button className="cta-button" onClick={handleDecrement} style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', color: '#fff', boxShadow: 'none' }}>Decrement</button>
          </div>
          {helloMsg && <p style={{ color: '#10b981', fontStyle: 'italic', margin: '0.5rem 0 0 0' }}>{helloMsg}</p>}
        </div>

        {/* Section 2: Argument passing welcome */}
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.5rem' }}>
          <h4 style={{ color: '#fff', marginTop: 0 }}>2. Method with Arguments</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Triggers a greeting by passing the word "welcome" directly as an argument.</p>
          <button className="cta-button" onClick={() => sayWelcome('welcome')} style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)' }}>
            Say Welcome
          </button>
        </div>

        {/* Section 3: Synthetic Event */}
        <div>
          <h4 style={{ color: '#fff', marginTop: 0 }}>3. Synthetic Event (OnPress)</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Triggers a synthetic event, showcasing details of the event object structure.</p>
          <button className="cta-button" onClick={handleSyntheticEvent} style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#ef4444', boxShadow: 'none' }}>
            Trigger Synthetic OnPress
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterEvents;
