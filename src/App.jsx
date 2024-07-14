import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import RectangleAreaCalculator from './components/RectangleAreaCalculator';
import AyamFinder from './components/AyamFinder';
import Info from './components/Info'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/finder">Finder</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<RectangleAreaCalculator/>} />
          <Route path="/finder" element={<AyamFinder/>} />
          <Route path="/info" element={<AyamFinder/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
