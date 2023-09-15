// src/components/PersonalInfo.js
import React from 'react';

const PersonalInfo = ({ username }) => {
  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <p>Username: { username }</p>
      {/* Add more personal information here */}
    </div>
  );
};

export default PersonalInfo;
