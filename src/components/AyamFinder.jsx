import React, { useEffect, useState } from 'react'
import { Amsha, Ayam, details, dhikpathulu, goodAmshas, goodAyam, goodDhikpathulu, goodYogha, nakshatralu, thidulu, varalu, Yogalu } from '../data/data';

function AyamFinder() {

  const calculateShesam = (sp, multi, mod) => {
    let shesam = (sp * multi) % mod
    if (shesam == 0) {
      return mod
    } else {
      return shesam
    }
  };

  const [lengthFrom, setLengthFrom] = useState('45');//45-50
  const [lengthTo, setLengthTo] = useState('50');
  const [widthFrom, setWidthFrom] = useState('29');//29-34
  const [widthTo, setWidthTo] = useState('34');
  const [len, setlen] = useState([])
  const [wid, setwid] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const lengthSpan = [];
    for (let i = lengthFrom; i <= lengthTo; i++) {
      i = parseInt(i, 10)
      lengthSpan.push(i);//0 inches
      // lengthSpan.push(i + 1 / 12);//1 inches
      // lengthSpan.push(i + 2 / 12);//2 inches
      lengthSpan.push(i + 3 / 12);//3 inches
      // lengthSpan.push(i + 4 / 12);//4 inches
      // lengthSpan.push(i + 5 / 12);//5 inches
      lengthSpan.push(i + 6 / 12);//6 inches
      // lengthSpan.push(i + 7 / 12);//7 inches
      // lengthSpan.push(i + 8 / 12);//8 inches
      lengthSpan.push(i + 9 / 12);//9 inches
      // lengthSpan.push(i + 10 / 12);//10 inches
      // lengthSpan.push(i + 11 / 12);//11 inches
    }
    setlen(lengthSpan)
    const widthSpan = [];
    for (let i = widthFrom; i <= widthTo; i++) {
      i = parseInt(i, 10)
      widthSpan.push(i);//0 inches
      // widthSpan.push(i + (1 / 12));//1 inches
      // widthSpan.push(i + (2 / 12));//2 inches
      widthSpan.push(i + 3 / 12);//3 inches
      // widthSpan.push(i + 4 / 12);//4 inches
      // widthSpan.push(i + 5 / 12);//5 inches
      widthSpan.push(i + 6 / 12);//6 inches
      // widthSpan.push(i + 7 / 12);//7 inches
      // widthSpan.push(i + 8 / 12);//8 inches
      widthSpan.push(i + 9 / 12);//9 inches
      // widthSpan.push(i + 10 / 12);//10 inches
      // widthSpan.push(i + 11 / 12);//11 inches
    }
    setwid(widthSpan)
    const combinations = [];
    for (let i = 0; i < lengthSpan.length; i++) {
      for (let j = 0; j < widthSpan.length; j++) {
        let sp = Math.trunc(lengthSpan[i] * widthSpan[j] / 9)

        let a1 = calculateShesam(sp, details['Dhanam'].multi, details['Dhanam'].mod)
        let a2 = calculateShesam(sp, details['Runam'].multi, details['Runam'].mod)
        if (a1 - a2 < 4) {
          continue
        }
        let a3 = calculateShesam(sp, details['Ayam'].multi, details['Ayam'].mod)
        if (goodAyam.indexOf(a3) == -1) {
          continue
        }

        let a4 = calculateShesam(sp, details['Vayasu'].multi, details['Vayasu'].mod)
        if (a4 < 30) {
          continue
        }
        let a5 = calculateShesam(sp, details['Varam'].multi, details['Varam'].mod)
        let a6 = calculateShesam(sp, details['Thidi'].multi, details['Thidi'].mod)
        let a7 = calculateShesam(sp, details['Nakshatram'].multi, details['Nakshatram'].mod)
        let a8 = calculateShesam(sp, details['Dikshusi'].multi, details['Dikshusi'].mod)
        if (goodDhikpathulu.indexOf(a8) == -1) {
          continue
        }
        let a9 = calculateShesam(sp, details['Amsha'].multi, details['Amsha'].mod)
        if (goodAmshas.indexOf(a9) == -1) {
          continue
        }
        let a10 = calculateShesam(sp, details['Yogam'].multi, details['Yogam'].mod)
        if (goodYogha.indexOf(a10) == -1) {
          continue
        }
        combinations.push([lengthSpan[i], widthSpan[j], sp, a1, a2, a3 + ' ' + Ayam[parseInt(a3)], a4,
        a5 + ' ' + varalu[parseInt(a5)], a6 + ' ' + thidulu[parseInt(a6)], a7 + ' ' + nakshatralu[parseInt(a7)],
        a8 + ' ' + dhikpathulu[parseInt(a8)], a9 + ' ' + Amsha[parseInt(a9)], a10 + ' ' + Yogalu[parseInt(a10)], a1-a2])
      }
    }
    setData(combinations)
  }, [lengthFrom, lengthTo, widthFrom, widthTo])

  return (<>
    <div>Ayam Finder</div>
    <div className="side-by-side">
      <div className="input-group">
        <label>Length From:</label>
        <input type="number" value={lengthFrom} onChange={(e) => setLengthFrom(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Length To:</label>
        <input type="number" value={lengthTo} onChange={(e) => setLengthTo(e.target.value)} />
      </div>
    </div>
    <div className="side-by-side">
      <div className="input-group">
        <label>Width From:</label>
        <input type="number" value={widthFrom} onChange={(e) => setWidthFrom(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Width To:</label>
        <input type="number" value={widthTo} onChange={(e) => setWidthTo(e.target.value)} />
      </div>
    </div>
    <h1>Select Your Preference</h1>
    <table className='border-col'>
      <thead>
        <tr className='border-col'>
          <th className='border-col'>Length</th>
          <th className='border-col'>Width</th>
          <th className='border-col'>శేత్రపదం</th>
          <th className='border-col'>ధనము</th>
          <th className='border-col'>ఋణము</th>
          <th className='border-col'>ఆయము</th>
          <th className='border-col'>వయస్సు</th>
          <th className='border-col'>వారము</th>
          <th className='border-col'>తిథి</th>
          <th className='border-col'>నక్షత్రం</th>
          <th className='border-col'>దిక్పతి</th>
          <th className='border-col'>అంశ</th>
          <th className='border-col'>యోగం</th>
          <th className='border-col'>Profit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='border-col'>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className='border-col'>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>

  )
}

export default AyamFinder