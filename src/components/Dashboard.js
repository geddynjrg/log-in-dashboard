// src/components/Dashboard.js
import React from 'react';
import PersonalInfo from './PersonalInfo';

const Dashboard = ({ username, onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <PersonalInfo username={username}/>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
