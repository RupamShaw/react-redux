import Counter from '../components/Counter'
import store from '../store'
import React, { Component } from 'react';
// const CounterApp = () =>
// {return (
// <Counter
// value={store.getState()}
// onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
// onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
// />
// );}


class CounterAppContainer extends Component {
    render() {

        return (
            <Counter
            value={store.getState().counter}
            onIncrement={() => store.dispatch({ type: 'INCREMENT',payload: 1 })}
           
            />
        )
    }
}
export default CounterAppContainer