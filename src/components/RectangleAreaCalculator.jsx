import React, { useEffect, useState } from 'react';
import './RectangleAreaCalculator.css';

function RectangleAreaCalculator() {
  const [length, setLength] = useState('18');
  const [width, setWidth] = useState('19.5');

  const [dhanam, setDhnam] = useState('');
  const [runam, setRunam] = useState('');
  const [ayam, setAyam] = useState('');
  const [vayasu, setVayasu] = useState('');
  const [varam, setVaram] = useState('');
  const [thidhi, setThidhi] = useState('');
  const [nakshatram, setNakshatram] = useState('');
  const [dikruti, setDikruti] = useState('');
  const [amsha, setAmsha] = useState('');
  const [yogam, setYogam] = useState('');

  const calculateShesam = (multi, mod) => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    let shesam = (lengthNum * widthNum * multi / 9) % mod
    if (shesam == 0) {
      return mod
    } else {
      return shesam
    }
  };
  useEffect(() => {
    setDhnam(calculateShesam(8,12))
    setRunam(calculateShesam(3,8))
    setAyam(calculateShesam(9,8))
    setVayasu(calculateShesam(9,120))
    setVaram(calculateShesam(9,7))
    setThidhi(calculateShesam(6,30))
    setNakshatram(calculateShesam(8,27))
    setDikruti(calculateShesam(9,8))
    setAmsha(calculateShesam(6,9))
    setYogam(calculateShesam(4,27))
  }, [length, width])
  

  return (
    <div className="rectangle-calculator">
      <h1>Ayam Calculator</h1>
      <div className="side-by-side">
        <div className="input-group">
          <label>
            Length:
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>
            Width:
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      </div>

      <label>ShetraPadam = {length} x {width} / 9 = {length*width/9}</label>

      <h4>Ayam - Ganitahm</h4>
      
      <label>Dhanam - SP x 8 / 12 = {dhanam}</label><br/>
      <label>Runam - SP x 3 / 8 = {runam}</label><br/>
      <label>Ayam - SP x 9 / 8 = {ayam}</label><br/>
      <label>Vayasu - SP x 9 / 120 = {vayasu}</label><br/>
      <label>Varam - SP x 9 / 7 = {varam}</label><br/>
      <label>Thidhi - SP x 6 / 30 = {thidhi}</label><br/>
      <label>Nakshatram - SP x 8 / 27 = {nakshatram}</label><br/>
      <label>Dikruti - SP x 9 / 8 = {dikruti}</label><br/>
      <label>Amsha - SP x 6 / 9 = {amsha}</label><br/>
      <label>Yogam - SP x 4 / 27 = {yogam}</label><br/>
    </div>
  );
}

export default RectangleAreaCalculator;
