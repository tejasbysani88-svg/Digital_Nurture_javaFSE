import React from 'react';

const ListofPlayers = () => {
  // Array of 11 players with names and scores
  const players = [
    { name: 'Virat Kohli', score: 92 },
    { name: 'Rohit Sharma', score: 85 },
    { name: 'KL Rahul', score: 68 },
    { name: 'Shikhar Dhawan', score: 55 },
    { name: 'Rishabh Pant', score: 72 },
    { name: 'Hardik Pandya', score: 78 },
    { name: 'Ravindra Jadeja', score: 64 },
    { name: 'Jasprit Bumrah', score: 12 },
    { name: 'Mohammed Shami', score: 18 },
    { name: 'Yuzvendra Chahal', score: 8 },
    { name: 'Mohammed Siraj', score: 15 }
  ];

  // Filtering players with scores below 70 using ES6 arrow functions
  const playersBelow70 = players.filter(player => player.score < 70);
  const playersAbove70 = players.filter(player => player.score >= 70);

  return (
    <div className="cricket-view animate-fade-in" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div className="badge" style={{ background: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24' }}>
        🏏 Player Roster & Statistics
      </div>
      <h2 style={{ marginBottom: '2rem' }}>List of Players</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        {/* Full Player List */}
        <div className="portal-card">
          <div className="card-header">
            <div className="icon-badge">📋</div>
            <h3>All 11 Players (ES6 map)</h3>
          </div>
          <div className="card-body">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {players.map((player, idx) => (
                <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>{player.name}</span>
                  <strong style={{ color: player.score >= 70 ? '#10b981' : '#9ca3af' }}>{player.score} runs</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Filtered Player Lists */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Below 70 */}
          <div className="portal-card" style={{ borderColor: 'rgba(239, 68, 68, 0.25)' }}>
            <div className="card-header">
              <div className="icon-badge" style={{ color: '#ef4444' }}>⚠️</div>
              <h3>Scores below 70 (ES6 filter)</h3>
            </div>
            <div className="card-body">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {playersBelow70.map((player, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', color: '#f3f4f6' }}>
                    <span>{player.name}</span>
                    <strong style={{ color: '#ef4444' }}>{player.score}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Above 70 */}
          <div className="portal-card" style={{ borderColor: 'rgba(16, 185, 129, 0.25)' }}>
            <div className="card-header">
              <div className="icon-badge" style={{ color: '#10b981' }}>🔥</div>
              <h3>Scores 70 & Above (High Scorers)</h3>
            </div>
            <div className="card-body">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {playersAbove70.map((player, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', color: '#f3f4f6' }}>
                    <span>{player.name}</span>
                    <strong style={{ color: '#10b981' }}>{player.score}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListofPlayers;
