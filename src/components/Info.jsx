import React from 'react'
import { Amsha, Ayam, dhikpathulu, nakshatralu, thidulu, varalu, Yogalu } from '../data/data'
import './RectangleAreaCalculator.css'

function Info() {
  return (<>
    <div>Info</div>
    <div className='flex-div-info'>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>ఆయము</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Ayam).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + Ayam[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>వారము</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(varalu).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + varalu[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>తిథి</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(thidulu).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + thidulu[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>నక్షత్రం</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(nakshatralu).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + nakshatralu[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>దిక్పతి</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(dhikpathulu).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + dhikpathulu[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>అంశ</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Amsha).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + Amsha[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='border-col center'>
        <thead>
          <tr className='border-col'>
            <th className='border-col'>యోగం</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Yogalu).map(key => (
            <tr key={key} className='border-col'>
              <td key={key} className='border-col'>{key + " " + Yogalu[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default Info