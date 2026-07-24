import React from 'react';
import CohortDetails from './Components/CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      cohortName: 'Cohort 1 - Java FSE',
      courseName: 'Java Full Stack Engineering',
      startDate: '2026-06-01',
      endDate: '2026-09-30',
      status: 'ongoing'
    },
    {
      cohortName: 'Cohort 2 - DotNet FSE',
      courseName: '.NET Full Stack Engineering',
      startDate: '2026-03-01',
      endDate: '2026-06-30',
      status: 'completed'
    },
    {
      cohortName: 'Cohort 3 - Cloud Native',
      courseName: 'AWS Cloud Native Architect',
      startDate: '2026-07-01',
      endDate: '2026-10-31',
      status: 'ongoing'
    },
    {
      cohortName: 'Cohort 4 - DevOps Specialist',
      courseName: 'DevOps & Git Automation',
      startDate: '2026-01-15',
      endDate: '2026-04-15',
      status: 'completed'
    }
  ];

  return (
    <div className="App">
      <div className="glow-container">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      <header className="App-header">
        <div className="badge">Cognizant Academy</div>
        <h1 className="main-title">Academy Cohorts Dashboard</h1>
        <p className="subtitle">
          Monitor the progression, start times, and execution status of active and archived training cohorts.
        </p>

        <div className="cohorts-list" style={{ textAlign: 'center', width: '100%' }}>
          {cohorts.map((c, index) => (
            <CohortDetails 
              key={index}
              cohortName={c.cohortName}
              courseName={c.courseName}
              startDate={c.startDate}
              endDate={c.endDate}
              status={c.status}
            />
          ))}
        </div>

        <footer className="App-footer">
          <p>Created for Digital Nurture Java FSE • React Lab Part 2</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
