import React, { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Homepage />
    
    </Router>
  );
  
}

export default App;
