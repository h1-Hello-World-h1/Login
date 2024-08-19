import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Frontend/Home.jsx";
import Login from "./Frontend/Login.jsx";
import Signup from "./Frontend/Signup.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
