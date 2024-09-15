import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import RectangleAreaCalculator from './components/RectangleAreaCalculator';
import AyamFinder from './components/AyamFinder';
import Info from './components/Info'
import './App.css';
import Counter from './components/Counter';
import FeetInchesAdder from './components/FeetInchesAdder';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
      <NavBar/>
        <Routes>
          <Route path="/ayam-app/" element={<RectangleAreaCalculator />} />
          <Route path="/ayam-app/finder" element={<AyamFinder />} />
          <Route path="/ayam-app/info" element={<Info />} />
          <Route path="/ayam-app/counter" element={<Counter />} />
          <Route path="/ayam-app/feet-adder" element={<FeetInchesAdder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
