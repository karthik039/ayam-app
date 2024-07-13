import { useState } from 'react'
import './App.css'
import RectangleAreaCalculator from './components/RectangleAreaCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <RectangleAreaCalculator/>
    </>
  )
}

export default App
