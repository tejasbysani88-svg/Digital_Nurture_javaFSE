import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { title: 'The Power of Virtual DOM', date: 'July 24, 2026', readTime: '5 min read', desc: 'Understanding reconciliation, VDOM diffing, and how React processes updates efficiently.' },
    { title: 'ES6 Spread and Destructuring', date: 'July 20, 2026', readTime: '3 min read', desc: 'Mastering modern ES6 syntax for cleaner arrays, object parameters, and code structure.' }
  ];

  return (
    <div className="portal-card animate-fade-in" style={{ padding: '1.5rem', textAlign: 'left' }}>
      <div className="card-header">
        <div className="icon-badge">✍️</div>
        <h3>Blog Feed</h3>
      </div>
      <div className="card-body" style={{ marginTop: '1rem' }}>
        {blogs.map((b, idx) => (
          <div key={idx} style={{ marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', color: '#fff', fontSize: '1.2rem' }}>{b.title}</h4>
            <span style={{ fontSize: '0.85rem', color: '#a5f3fc' }}>{b.date} • ⏱️ {b.readTime}</span>
            <p style={{ margin: '0.5rem 0 0 0', color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.4' }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
