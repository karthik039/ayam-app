import React, { useState } from 'react';
import './CounterApp.css'; // Import the CSS file

function CounterApp() {
  // Define state for each counter
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  // Reset functions for each counter
  const resetCounter1 = () => setCounter1(0);
  const resetCounter2 = () => setCounter2(0);
  const resetCounter3 = () => setCounter3(0);

  // Reset all counters
  const resetAllCounters = () => {
    setCounter1(0);
    setCounter2(0);
    setCounter3(0);
  };

  return (
    <div className="counter-app">
      <div className="counter">
        <h2>Cement: {counter1}</h2>
        <div className="button-group">
          <button onClick={() => setCounter1(counter1 + 1)}>+</button>
          <button onClick={() => setCounter1(counter1 - 1)}>-</button>
          <button onClick={resetCounter1}>Reset</button>
        </div>
      </div>
      
      <div className="counter">
        <h2>Sand: {counter2}</h2>
        <div className="button-group">
          <button onClick={() => setCounter2(counter2 + 1)}>+</button>
          <button onClick={() => setCounter2(counter2 - 1)}>-</button>
          <button onClick={resetCounter2}>Reset</button>
        </div>
      </div>

      <div className="counter">
        <h2>Concrete: {counter3}</h2>
        <div className="button-group">
          <button onClick={() => setCounter3(counter3 + 1)}>+</button>
          <button onClick={() => setCounter3(counter3 - 1)}>-</button>
          <button onClick={resetCounter3}>Reset</button>
        </div>
      </div>

      <div className="reset-all">
        <button onClick={resetAllCounters}>Reset All Counters</button>
      </div>
    </div>
  );
}

export default CounterApp;
