import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('book');
  const [renderMethod, setRenderMethod] = useState('switch'); // switch, ternary, logical, variable

  // Method 1: Switch-Case Conditional Rendering (Helper Function)
  const renderContentSwitch = (tab) => {
    switch (tab) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return null;
    }
  };

  // Method 2: Element Variable Method (if-else Assignment)
  let componentToRender;
  if (activeTab === 'book') {
    componentToRender = <BookDetails />;
  } else if (activeTab === 'blog') {
    componentToRender = <BlogDetails />;
  } else if (activeTab === 'course') {
    componentToRender = <CourseDetails />;
  }

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Conditional Rendering Demo</div>
        <h1 className="main-title">Academic Blogger Hub</h1>
        <p className="subtitle">
          Demonstrates book details, blog feeds, and course syllabi using Switch, Ternary, Short-circuit, and Variable rendering.
        </p>

        {/* Tab Selection */}
        <div className="nav-tabs" style={{ marginBottom: '2rem' }}>
          <button 
            className={`tab-btn ${activeTab === 'book' ? 'active' : ''}`}
            onClick={() => setActiveTab('book')}
          >
            Book Details
          </button>
          <button 
            className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog')}
          >
            Blog Details
          </button>
          <button 
            className={`tab-btn ${activeTab === 'course' ? 'active' : ''}`}
            onClick={() => setActiveTab('course')}
          >
            Course Details
          </button>
        </div>

        {/* Method selector to display how it is being rendered */}
        <div style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.9rem', marginRight: '1rem' }}>Rendering Method:</span>
          <select 
            value={renderMethod} 
            onChange={(e) => setRenderMethod(e.target.value)}
            style={{
              background: 'rgba(10, 12, 16, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '0.4rem 0.80rem',
              borderRadius: '8px',
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}
          >
            <option value="switch">1. Switch Case (Helper Function)</option>
            <option value="ternary">2. Ternary Operator (? :)</option>
            <option value="logical">3. Logical AND (&&)</option>
            <option value="variable">4. Element Variable (if-else)</option>
          </select>
        </div>

        {/* Conditional Rendering Outputs */}
        <div style={{ width: '100%', maxWidth: '800px' }}>
          
          {/* Method 1: Switch-case */}
          {renderMethod === 'switch' && (
            <div>
              <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#61dafb', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Method: Switch Case
              </div>
              {renderContentSwitch(activeTab)}
            </div>
          )}

          {/* Method 2: Ternary */}
          {renderMethod === 'ternary' && (
            <div>
              <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#a5f3fc', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Method: Ternary Operator
              </div>
              {activeTab === 'book' ? (
                <BookDetails />
              ) : activeTab === 'blog' ? (
                <BlogDetails />
              ) : (
                <CourseDetails />
              )}
            </div>
          )}

          {/* Method 3: Logical && */}
          {renderMethod === 'logical' && (
            <div>
              <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#10b981', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Method: Logical AND Short-circuit
              </div>
              {activeTab === 'book' && <BookDetails />}
              {activeTab === 'blog' && <BlogDetails />}
              {activeTab === 'course' && <CourseDetails />}
            </div>
          )}

          {/* Method 4: Element Variable */}
          {renderMethod === 'variable' && (
            <div>
              <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Method: Element Variable (if-else)
              </div>
              {componentToRender}
            </div>
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
