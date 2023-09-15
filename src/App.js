// src/App.js
import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PersonalInfo from './components/PersonalInfo';

const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/dashboard" element={user ? (<Dashboard username={user} onLogout={logout} />
            ) : (
            <Navigate to="/login" />
          )}/>
          <Route path="/personal-info" element={user ? (<PersonalInfo username={user} />
          ) : (
            <Navigate to="/login" />
          )}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };
