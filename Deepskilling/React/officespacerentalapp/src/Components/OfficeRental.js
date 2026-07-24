import React from 'react';

const OfficeRental = () => {
  // Main featured office object
  const featuredOffice = {
    name: 'Metropolitan Premium Suite',
    rent: 75000,
    address: 'Block C, Tech Park, Sector 5, Bangalore',
    image: '/office_space.jpg' // Static asset from public folder
  };

  // List of other office spaces
  const officeSpaces = [
    { name: 'Co-working Flexi Desk', rent: 25000, address: '4th Floor, Skyline Hub, Hyderabad' },
    { name: 'Executive Corner Office', rent: 85000, address: 'Penthouse A, Silicon Tower, Noida' },
    { name: 'Startup Shared Floor', rent: 58000, address: 'Ground Floor, Innovation Labs, Pune' },
    { name: 'Enterprise Corporate Space', rent: 120000, address: 'Tower B, Global Tech Center, Chennai' }
  ];

  // Helper to determine rent color (Red below 60000, Green above/equal 60000)
  const getRentColor = (rent) => {
    return rent >= 60000 ? '#10b981' : '#ef4444'; 
  };

  return (
    <div className="rental-view animate-fade-in" style={{ width: '100%', maxWidth: '850px', margin: '0 auto' }}>
      <div className="badge">🏢 Workspace Rental Services</div>
      <h2 style={{ marginBottom: '2.5rem' }}>Office Space Rental Portal</h2>

      {/* Featured Office Space Card */}
      <div className="portal-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', marginBottom: '3rem', padding: '2rem', textAlign: 'left' }}>
        <div>
          <img 
            src={featuredOffice.image} 
            alt={featuredOffice.name} 
            style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }} 
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#61dafb', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Featured Listing</span>
          <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: '0.5rem 0 1rem 0' }}>{featuredOffice.name}</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', textTransform: 'uppercase' }}>Monthly Rental</span>
            <strong style={{ fontSize: '2rem', color: getRentColor(featuredOffice.rent) }}>
              ₹{featuredOffice.rent.toLocaleString()}
            </strong>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', textTransform: 'uppercase' }}>Address</span>
            <p style={{ margin: '0.25rem 0 0 0', color: '#f3f4f6', lineHeight: '1.5' }}>{featuredOffice.address}</p>
          </div>
        </div>
      </div>

      {/* List of Other Office Spaces */}
      <h3 style={{ textAlign: 'left', marginBottom: '1.25rem', fontSize: '1.3rem', color: '#fff' }}>Available Workspace Packages</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
        {officeSpaces.map((office, idx) => (
          <div key={idx} className="portal-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#fff', margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>{office.name}</h4>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', margin: '0 0 1.5rem 0', lineHeight: '1.4' }}>{office.address}</p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Rent / Month</span>
              <strong style={{ fontSize: '1.25rem', color: getRentColor(office.rent) }}>
                ₹{office.rent.toLocaleString()}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeRental;
