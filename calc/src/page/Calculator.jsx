{/*import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
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

          <button className='btn' onClick={handleClear}>C</button>
          <button className='btn' onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator

*/}
import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
  const [input, setInput] = useState("")

  function handleClick(val) {
    setInput(input + val)
  }

  function handleClear() {
    setInput("")
  }

  function handleEqual() {
    try {
      // Check division by zero cases
      if (/\/0(?!\d)/.test(input)) {   // regex → detects "/0" not followed by another digit
        setInput("Math Error")
        return
      }

      const result = eval(input)

      // Extra check: JS may still give Infinity or NaN
      if (!isFinite(result)) {
        setInput("Math Error")
      } else {
        setInput(result.toString())
      }

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

          <button className='btn' onClick={handleClear}>C</button>
          <button className='btn' onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
