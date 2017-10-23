import React from 'react';
export default function Counter({
    value,
        onIncrement
    }) {
        return(
        <div>
                <h1> {value}</h1>
                <button onClick={onIncrement} >+</button>
        </div>);
}

