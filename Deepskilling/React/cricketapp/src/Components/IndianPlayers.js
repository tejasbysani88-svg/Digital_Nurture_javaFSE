import React from 'react';

const IndianPlayers = () => {
  // 11 Indian players array
  const indianSquad = [
    'Virat Kohli',    // 1st (Odd)
    'Rohit Sharma',   // 2nd (Even)
    'KL Rahul',       // 3rd (Odd)
    'Shikhar Dhawan', // 4th (Even)
    'Rishabh Pant',   // 5th (Odd)
    'Hardik Pandya',  // 6th (Even)
    'Ravindra Jadeja',// 7th (Odd)
    'Jasprit Bumrah', // 8th (Even)
    'Mohammed Shami', // 9th (Odd)
    'Yuzvendra Chahal',// 10th (Even)
    'Mohammed Siraj'  // 11th (Odd)
  ];

  // Destructuring players from the squad
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11] = indianSquad;

  // Separation into Odd and Even rankings
  const oddPlayers = [p1, p3, p5, p7, p9, p11];
  const evenPlayers = [p2, p4, p6, p8, p10];

  // Two rosters to merge
  const T20players = ['Suryakumar Yadav', 'Ishan Kishan', 'Ruturaj Gaikwad'];
  const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Priyank Panchal', 'Abhimanyu Easwaran'];

  // Merging using the ES6 spread operator
  const mergedSquad = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="cricket-view animate-fade-in" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130,  blue, 0.2)', color: '#3b82f6' }}>
        🇮🇳 national squads & selections
      </div>
      <h2 style={{ marginBottom: '2rem' }}>Indian Players</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
        {/* Odd Players Destructuring Card */}
        <div className="portal-card">
          <div className="card-header">
            <div className="icon-badge">🔴</div>
            <h3>Odd Ranked Players (1, 3, 5...)</h3>
          </div>
          <div className="card-body">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {oddPlayers.map((player, idx) => (
                <li key={idx} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f3f4f6' }}>
                  Player {idx * 2 + 1}: <strong>{player}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Even Players Destructuring Card */}
        <div className="portal-card">
          <div className="card-header">
            <div className="icon-badge">🔵</div>
            <h3>Even Ranked Players (2, 4, 6...)</h3>
          </div>
          <div className="card-body">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {evenPlayers.map((player, idx) => (
                <li key={idx} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f3f4f6' }}>
                  Player {(idx + 1) * 2}: <strong>{player}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Merged Players Spread operator Card */}
        <div className="portal-card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-header">
            <div className="icon-badge">🤝</div>
            <h3>Merged Players (T20 + Ranji Trophy)</h3>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
              <div>
                <h4 style={{ color: '#61dafb', margin: '0 0 0.5rem 0' }}>T20 Squad</h4>
                <ul style={{ listStyle: 'square', paddingLeft: '1.25rem', color: '#9ca3af' }}>
                  {T20players.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#a5f3fc', margin: '0 0 0.5rem 0' }}>Ranji Trophy</h4>
                <ul style={{ listStyle: 'square', paddingLeft: '1.25rem', color: '#9ca3af' }}>
                  {RanjiTrophyPlayers.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>Merged List</h4>
                <ol style={{ paddingLeft: '1.25rem', margin: 0, color: '#fff' }}>
                  {mergedSquad.map((p, i) => <li key={i}>{p}</li>)}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;
