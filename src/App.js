// src/App.jsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentCheckInOut from './StudentCheckInOut';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Library Management System</h1>
      <StudentCheckInOut />
      <ToastContainer />
    </div>
  );
};

export default App;
