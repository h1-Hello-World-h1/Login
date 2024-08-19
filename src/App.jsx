import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Frontend/Home';
import Login from './Frontend/Login';
import Signup from './Frontend/Signup';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;