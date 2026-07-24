import React from 'react';
import Posts from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Blog Explorer</div>
        <h1 className="main-title">Interactive Blog Posts</h1>
        <p className="subtitle">
          Demonstrating React class components, Fetch API, and lifecycle methods like componentDidMount.
        </p>

        {/* Render the Posts component */}
        <Posts />

        <footer className="App-footer">
          <p>Created for Digital Nurture Java FSE • React Lab Session 4</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
