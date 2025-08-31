import React, { useState } from 'react'
import './Style.css'

const Index = () => {
  const [input, setInput] = useState("")

  function handleClick(val) {
    setInput(input + val)
  }

  function handleClear() {
    setInput("")
  }

  function handleEqual() {
    try {
      setInput(eval(input).toString()) 
    } catch (error) {
      setInput("Error")
    }
  }

  return (
    <div>
      <div className="main">
        <div className="display">
          <input type="text" className='disp' value={input} readOnly />
        </div>
        <div className="keys">

          {[1,2,3,4,5,6,7,8,9,0,"."].map((num) => (
            <button key={num} className='btn' onClick={() => handleClick(num.toString())}>
              {num}
            </button>
          ))}

          <button className='btn' onClick={() => handleClick('+')}>+</button>
          <button className='btn' onClick={() => handleClick('-')}>-</button>
          <button className='btn' onClick={() => handleClick('*')}>×</button>
          <button className='btn' onClick={() => handleClick('/')}>÷</button>

          {/* Utility buttons */}
          <button className='btn' onClick={handleClear}>C</button>
          <button className='btn' onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Index
