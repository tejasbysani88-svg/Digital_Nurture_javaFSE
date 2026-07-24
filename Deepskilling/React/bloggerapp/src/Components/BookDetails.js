import React from 'react';

const BookDetails = () => {
  const books = [
    { title: 'The Pragmatic Programmer', author: 'Andy Hunt & Dave Thomas', rating: '4.8/5', desc: 'A timeless guide to software development best practices.' },
    { title: 'Clean Code', author: 'Robert C. Martin', rating: '4.7/5', desc: 'A reference handbook on writing clean, readable craftsmanship code.' }
  ];

  return (
    <div className="portal-card animate-fade-in" style={{ padding: '1.5rem', textAlign: 'left' }}>
      <div className="card-header">
        <div className="icon-badge">📚</div>
        <h3>Book Collection</h3>
      </div>
      <div className="card-body" style={{ marginTop: '1rem' }}>
        {books.map((b, idx) => (
          <div key={idx} style={{ marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', color: '#fff', fontSize: '1.2rem' }}>{b.title}</h4>
            <span style={{ fontSize: '0.85rem', color: '#61dafb' }}>By {b.author} • ⭐ {b.rating}</span>
            <p style={{ margin: '0.5rem 0 0 0', color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.4' }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
