import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore }  from 'redux'
import registerServiceWorker from './registerServiceWorker';

const Counter =({
    value1,
    onIncrement
    }) => (
    <div>
        <h1>
            { value1 }
        </h1>
        <button onClick={onIncrement} >+</button>
    </div>
);

const counter = (state =0, action) => {
    {  
        switch (action.type){
        case 'Increment' : {
            return state + 1;}
        default :
            return state ;
        }
    
    }
}
const store = createStore(counter)
const render = () => {
    ReactDOM.render(
        <Counter 
            value1 = { store.getState() }
            onIncrement={() =>
            store.dispatch({
                type: 'Increment'
            })
            }  
        /> ,
         document.getElementById('root')
    );
}
store.subscribe(render)
render();
registerServiceWorker();
