import React from 'react';


const Counter = ({ value, onIncrement}) => (
    <div>
                <h1> {value}</h1>
                <button onClick={onIncrement} >+</button>
        </div>
  )

  export default Counter
  