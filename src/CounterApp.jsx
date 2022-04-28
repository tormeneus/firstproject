import React from 'react'
import { useState } from 'react';

const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter (counter + 1);

  const decrement = () => setCounter (counter - 1);
  
  return (
    <div className="App">
      <div className="centerpage">
        <button className = 'button' onClick = {increment}>Press me for +1</button>
        <h1>{counter}</h1>
        <button className = 'button' onClick = {decrement}>Press me for -1</button>
        <p><button className = 'button' onClick = {() => setCounter (0)}>Reset</button></p>
      </div>
    </div>
  )
}

export default CounterApp;