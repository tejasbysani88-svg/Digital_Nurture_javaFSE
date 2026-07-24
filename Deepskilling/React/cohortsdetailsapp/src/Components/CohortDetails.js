import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohortName, startDate, endDate, status, courseName }) => {
  // Style for <h3> to color green if ongoing, blue in all other scenarios
  const h3Style = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue',
    marginTop: '0',
    marginBottom: '10px',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohortName}</h3>
      <dl>
        <dt>Course Name</dt>
        <dd>{courseName}</dd>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        <dt>End Date</dt>
        <dd>{endDate}</dd>
        <dt>Status</dt>
        <dd style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
