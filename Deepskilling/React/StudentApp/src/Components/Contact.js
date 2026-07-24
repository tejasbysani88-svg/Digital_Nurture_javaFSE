import React from 'react';

const Contact = () => {
  return (
    <div className="portal-card contact-card animate-fade-in">
      <div className="card-header">
        <div className="icon-badge">📞</div>
        <h3>Contact Desk</h3>
      </div>
      <div className="card-body">
        <h2>Welcome to the Contact page of the Student Management Portal</h2>
        <p>If you have any questions, encounter issues, or require system administration permissions, please reach out to our IT Help Desk.</p>
        <div className="contact-details">
          <div className="contact-item">
            <strong>Email:</strong> support@studentportal.edu
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> +1 (555) 019-2834
          </div>
          <div className="contact-item">
            <strong>Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM EST
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
