import React, { useEffect, useState } from 'react';
import '../data/data'
import './RectangleAreaCalculator.css';
import { details } from '../data/data';

function RectangleAreaCalculator() {
  const [length, setLength] = useState('46.75');
  const [width, setWidth] = useState('31');

  const [sp, setSP] = useState('');

  const calculateShesam = (multi, mod) => {
    let shesam = (sp * multi) % mod
    if (shesam == 0) {
      return mod
    } else {
      return shesam
    }
  };

  useEffect(() => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    let sp = Math.trunc(lengthNum * widthNum / 9)
    setSP(sp)
  }, [length, width])
  const detailsView = Object.keys(details).map(key =>
    <tr key={key} className='border-col'>
      <td className='border-col'>
        {details[key].name}
      </td>
      <td className='border-col'> SP x {details[key].multi} / {details[key].mod} =
        {calculateShesam(details[key].multi, details[key].mod)}
      </td>
      <td className='border-col'>
        <label className={
          details[key].flag == "true" ?
            (details[key]?.glist.indexOf(calculateShesam(details[key].multi, details[key].mod)) > -1 ? "success-text" : "failure-text")
            : ''}>
          {(details[key].check == "true") && details[key]?.list[calculateShesam(details[key].multi, details[key].mod)]}
        </label>
      </td>
      {/* <br /> */}
    </tr>)

  return (
    <div className="rectangle-calculator">
      <h1>Aayam Calculator</h1>
      <div className="side-by-side">
        <div className="input-group">
          <label>Length:</label>
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)}/>
        </div>
        <div className="input-group">
          <label>Width:</label>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)}/>
        </div>
      </div>

      <label>ShetraPadam = {length} x {width} / 9 = {sp}</label>

      <h4>ఆయాది గణితము</h4>
      <table className='border-col center'>
        <tbody>
          {detailsView}
        </tbody>
      </table>


      <br />
      <label>Labam - {calculateShesam(details['Dhanam'].multi, details['Dhanam'].mod)} - {calculateShesam(details['Runam'].multi, details['Runam'].mod)} =
        {calculateShesam(details['Dhanam'].multi, details['Dhanam'].mod) - calculateShesam(details['Runam'].multi, details['Runam'].mod)}</label><br />

      <br />
      <div className='flex-div'>
        West
        <table className='border-collapse'>
          <tbody>
            <tr className='no-border'>
              <td className='no-border'></td>
              <td>North</td>
              <td></td>
            </tr>
            <tr className='border-col'>
              <td className='border-col failure-text'>6 ఖరాయము <br />గాడిద</td>
              <td className='border-col success-text'>7 గజాయము <br /> ఏనుగు</td>
              <td className='border-col failure-text'>8 శాఖయము <br /> కాకి </td>
            </tr>
            <tr className='border-col'>
              {/* <td className='no-border'>West</td> */}
              <td className='border-col success-text'>5 వృషభాయము <br />ఎద్దు</td>
              <td className='border-col'></td>
              <td className='border-col success-text'>1 ధ్వజయము<br />పురుష</td>
              {/* <td className='no-border'>East</td> */}
            </tr>
            <tr className='border-col'>
              <td className='border-col failure-text'>4 శ్వానాయము <br />కుక్క</td>
              <td className='border-col success-text'>3 సింహయము <br />సింహం</td>
              <td className='border-col failure-text'>2 ధూమయము <br />పిల్లి</td>
            </tr>
            <tr className='no-border'>
              <td className='no-border'></td>
              <td>South</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        East
      </div>
      <br />
      <h4>ఏ ఆయం  ఎక్కడ ఉండాలి ?</h4>
      <div className='flex-div'>
        West
        <table className='border-collapse'>
          <tbody>
            <tr className='no-border'>
              <td className='no-border'></td>
              <td>North</td>
              <td></td>
            </tr>
            <tr className='border-col'>
              <td className='border-col failure-text'></td>
              <td className='border-col success-text'>1 ధ్వజయము <br />3 సింహయము<br />7 గజాయము </td>
              <td className='border-col failure-text'> </td>
            </tr>
            <tr className='border-col'>
              {/* <td className='no-border'>West</td> */}
              <td className='border-col success-text'>1 ధ్వజయము <br />3 సింహయము<br />5 వృషభాయము <br />7 గజాయము</td>
              <td className='border-col'></td>
              <td className='border-col success-text'>1 ధ్వజయము</td>
              {/* <td className='no-border'>East</td> */}
            </tr>
            <tr className='border-col'>
              <td className='border-col failure-text'></td>
              <td className='border-col success-text'>1 ధ్వజయము <br />3 సింహయము </td>
              <td className='border-col failure-text'></td>
            </tr>
            <tr className='no-border'>
              <td className='no-border'></td>
              <td>South</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        East
      </div>
    </div>
  );
}

export default RectangleAreaCalculator;
