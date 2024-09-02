import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import RectangleAreaCalculator from './components/RectangleAreaCalculator';
import AyamFinder from './components/AyamFinder';
import Info from './components/Info'
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/ayam-app/">Home</Link>
            </li>
            <li>
              <Link to="/ayam-app/finder">Finder</Link>
            </li>
            <li>
              <Link to="/ayam-app/info">Info</Link>
            </li>
            <li>
              <Link to="/ayam-app/counter">Counter</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ayam-app/" element={<RectangleAreaCalculator/>} />
          <Route path="/ayam-app/finder" element={<AyamFinder/>} />
          <Route path="/ayam-app/info" element={<Info/>} />
          <Route path="/ayam-app/counter" element={<Counter/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
