import React from 'react';

const Home = () => {
  return (
    <div className="portal-card home-card animate-fade-in">
      <div className="card-header">
        <div className="icon-badge">🏠</div>
        <h3>Home View</h3>
      </div>
      <div className="card-body">
        <h2>Welcome to the Home page of Student Management Portal</h2>
        <p>Manage courses, track student enrollment, and view analytical performance dashboards from one unified workspace.</p>
        <div className="quick-stats">
          <div className="stat-box">
            <span className="stat-num">1,240</span>
            <span className="stat-label">Active Students</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">48</span>
            <span className="stat-label">Total Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
