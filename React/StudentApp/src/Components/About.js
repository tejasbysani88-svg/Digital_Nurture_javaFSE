import React from 'react';

const About = () => {
  return (
    <div className="portal-card about-card animate-fade-in">
      <div className="card-header">
        <div className="icon-badge">ℹ️</div>
        <h3>About Us</h3>
      </div>
      <div className="card-body">
        <h2>Welcome to the About page of the Student Management Portal</h2>
        <p>Our portal is designed to streamline administrative workflows, enhance academic tracking, and improve student-teacher communication using modern web technologies.</p>
        <p className="highlight-text">Built with React for superior performance, responsive layouts, and modern single-page execution.</p>
      </div>
    </div>
  );
};

export default About;
