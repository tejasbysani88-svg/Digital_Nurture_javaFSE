import React from 'react';

const CourseDetails = () => {
  const courses = [
    { title: 'React JS Deep Dive', level: 'Intermediate', duration: '6 weeks', desc: 'Hooks, state management, routing, API integrations, and structural optimizations.' },
    { title: 'Full Stack Java Engineering', level: 'Advanced', duration: '12 weeks', desc: 'Spring Boot, Hibernate, REST services, JPA integration, Mockito unit testing, and React frontends.' }
  ];

  return (
    <div className="portal-card animate-fade-in" style={{ padding: '1.5rem', textAlign: 'left' }}>
      <div className="card-header">
        <div className="icon-badge">🎓</div>
        <h3>Course Syllabus</h3>
      </div>
      <div className="card-body" style={{ marginTop: '1rem' }}>
        {courses.map((c, idx) => (
          <div key={idx} style={{ marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', color: '#fff', fontSize: '1.2rem' }}>{c.title}</h4>
            <span style={{ fontSize: '0.85rem', color: '#10b981' }}>{c.level} • ⏱️ {c.duration}</span>
            <p style={{ margin: '0.5rem 0 0 0', color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.4' }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
