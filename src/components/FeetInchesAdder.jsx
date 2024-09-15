import React, { useState } from 'react';

const FeetInchesAdder = () => {
  const [inputs, setInputs] = useState([{ feet: '', inches: '' }]);
  const [totalFeet, setTotalFeet] = useState(0);
  const [totalInches, setTotalInches] = useState(0);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };
  const resetAllCounters = () => {
    setInputs([{ feet: '', inches: '' }]);
  };

  const addInputFields = () => {
    setInputs([...inputs, { feet: '', inches: '' }]);
  };

  const calculateTotal = () => {
    let totalInches = 0;
    let totalFeet = 0;

    inputs.forEach(input => {
      const feet = parseInt(input.feet || 0, 10);
      const inches = parseInt(input.inches || 0, 10);
      totalFeet += feet;
      totalInches += inches;
    });

    totalFeet += Math.floor(totalInches / 12);
    totalInches = totalInches % 12;

    setTotalFeet(totalFeet);
    setTotalInches(totalInches);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Feet and Inches</h2>
      {inputs.map((input, index) => (
        <div key={index} style={styles.inputContainer}>
          <input
            type="number"
            name="feet"
            placeholder="Feet"
            value={input.feet}
            onChange={(e) => handleInputChange(index, e)}
            style={styles.input}
          /><label style={styles.label}>Feet</label>
          {/* <p>&nbsp;&nbsp;&nbsp;</p> */}
          <input
            type="number"
            name="inches"
            placeholder="Inches"
            value={input.inches}
            style={styles.input}
            onChange={(e) => handleInputChange(index, e)}
          /><label style={styles.label}>Inches</label>
        </div>
      ))}

      <button onClick={addInputFields} style={{ ...styles.button, ...styles.addButton }}>➕ Add More</button>
      <button onClick={calculateTotal} style={{ ...styles.button, ...styles.calculateButton }}>🧮 Calculate Total</button>

      <div style={styles.resultContainer}>
        <h3 style={styles.resultTitle}>Total:</h3>
        <p style={styles.resultText}>{totalFeet} feet {totalInches} inches</p>
      </div>
      <div className="reset-all">
        <button onClick={resetAllCounters}>Reset Input</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    // maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  input: {
    width: '25vw',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #ddd',
    backgroundColor: '#fff',
    color: '#333',
    transition: 'border-color 0.3s',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    padding: '10px'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    marginTop: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  addButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
  },
  calculateButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
  },
  resultContainer: {
    marginTop: '20px',
    textAlign: 'center',
    backgroundColor: '#e9ecef',
    padding: '10px',
    borderRadius: '5px',
  },
  resultTitle: {
    margin: '0',
    color: '#17a2b8',
  },
  resultText: {
    margin: '5px 0 0 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  }
};

// Add hover effect for buttons
const stylesWithHover = {
  ...styles,
  button: {
    ...styles.button,
    ':hover': {
      backgroundColor: '#333',
    },
  },
};

export default FeetInchesAdder;
