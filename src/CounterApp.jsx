import React, { useEffect } from 'react'
import { useState } from 'react';

const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter (counter + 1);

  const decrement = () => setCounter (counter - 1);

  useEffect(() => {
    document.title = `Count: ${counter}`
  });
  
  return (
    <div className="App">
      <div className="centerpage">
        <button className = 'button' name="increment" onClick = {increment}>Press me for +1</button>
        <div name='count'><h1>{counter}</h1></div>
        <button className = 'button' name="decrement" onClick = {decrement}>Press me for -1</button>
        <p><button className = 'button' name='reset' onClick = {() => setCounter (0)}>Reset</button></p>
      </div>
    </div>
  )
}

export default CounterApp;