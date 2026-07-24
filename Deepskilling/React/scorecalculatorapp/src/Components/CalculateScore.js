import React, { useState } from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name = "Alice Johnson", School = "Springfield High", Total = 425, goal = 500 }) => {
  // State for interactive calculation
  const [studentName, setStudentName] = useState(Name);
  const [schoolName, setSchoolName] = useState(School);
  const [totalMarks, setTotalMarks] = useState(Total);
  const [goalMarks, setGoalMarks] = useState(goal);

  // Calculation
  const calcAverage = (tot, gl) => {
    const t = parseFloat(tot);
    const g = parseFloat(gl);
    if (isNaN(t) || isNaN(g) || g === 0) return 0;
    return ((t / g) * 100).toFixed(2);
  };

  const scorePercentage = calcAverage(totalMarks, goalMarks);
  
  // Status check
  const getStatus = (percentage) => {
    if (percentage >= 90) return { label: 'Outstanding', color: '#10b981' };
    if (percentage >= 75) return { label: 'Excellent', color: '#3b82f6' };
    if (percentage >= 50) return { label: 'Passed', color: '#f59e0b' };
    return { label: 'Needs Improvement', color: '#ef4444' };
  };

  const status = getStatus(scorePercentage);

  return (
    <div className="calc-container animate-fade-in">
      <div className="calc-card glass-panel">
        <div className="calc-header">
          <div className="calc-badge">📊 Score Analytics</div>
          <h2>Student Score Calculator</h2>
          <p className="calc-desc">Calculate and analyze student average scores instantly.</p>
        </div>

        <div className="calc-content-grid">
          {/* Inputs Section */}
          <div className="input-section">
            <h3>Update Student Info</h3>
            <div className="input-group">
              <label>Student Name</label>
              <input 
                type="text" 
                value={studentName} 
                onChange={(e) => setStudentName(e.target.value)} 
                placeholder="Enter student name"
              />
            </div>
            <div className="input-group">
              <label>School Name</label>
              <input 
                type="text" 
                value={schoolName} 
                onChange={(e) => setSchoolName(e.target.value)} 
                placeholder="Enter school name"
              />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Marks Obtained</label>
                <input 
                  type="number" 
                  value={totalMarks} 
                  onChange={(e) => setTotalMarks(e.target.value)} 
                  placeholder="Total marks"
                />
              </div>
              <div className="input-group">
                <label>Goal (Max Marks)</label>
                <input 
                  type="number" 
                  value={goalMarks} 
                  onChange={(e) => setGoalMarks(e.target.value)} 
                  placeholder="Max marks"
                />
              </div>
            </div>
          </div>

          {/* Results Display Section */}
          <div className="result-section">
            <h3>Calculation Result</h3>
            <div className="result-card">
              <div className="result-main">
                <span className="result-label">Average Score</span>
                <span className="result-value" style={{ color: status.color }}>
                  {scorePercentage}%
                </span>
              </div>
              
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${Math.min(100, Math.max(0, scorePercentage))}%`, backgroundColor: status.color }}
                ></div>
              </div>

              <div className="result-details">
                <div className="detail-row">
                  <span>Student:</span>
                  <strong>{studentName || "N/A"}</strong>
                </div>
                <div className="detail-row">
                  <span>School:</span>
                  <strong>{schoolName || "N/A"}</strong>
                </div>
                <div className="detail-row">
                  <span>Status:</span>
                  <span className="status-pill" style={{ backgroundColor: `${status.color}20`, color: status.color }}>
                    {status.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateScore;
