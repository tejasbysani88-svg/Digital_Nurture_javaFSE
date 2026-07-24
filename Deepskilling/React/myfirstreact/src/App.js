import React, { useState } from 'react';
import './App.css';

function App() {
  const [sessionUnlocked, setSessionUnlocked] = useState(false);

  const features = [
    { title: "Single Page Application", desc: "Dynamically rewrites the current page rather than loading entire new pages." },
    { title: "Virtual DOM", desc: "A lightweight representation of the real DOM that optimizes UI rendering." },
    { title: "Component-Based", desc: "Build encapsulated components that manage their own state." },
  ];

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>
      
      <header className="App-header animate-fade-in">
        <div className="badge">React Lab Session 1</div>
        <h1 className="main-title">welcome to the first session of React</h1>
        <p className="subtitle">
          Discover the power of components, the Virtual DOM, and Single Page Applications.
        </p>

        <div className="interactive-card">
          <h3>Ready to start?</h3>
          <button 
            className="cta-button"
            onClick={() => setSessionUnlocked(!sessionUnlocked)}
          >
            {sessionUnlocked ? "Hide Core Concepts" : "Explore Core Concepts"}
          </button>
        </div>

        {sessionUnlocked && (
          <div className="features-grid animate-slide-up">
            {features.map((f, idx) => (
              <div key={idx} className="feature-card">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        <footer className="App-footer">
          <p>Created for Digital Nurture Java FSE</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
