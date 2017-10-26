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


class CounterApp extends Component {
    constructor(...args) {
        super(...args);
        //store.dispatch({ type: 'CREATE_ACCOUNT' })
        //this.state =  store.getState()
    
    }
    componentDidMount() {
        // this.unsubscribe = store.subscribe(() =>
        //     this.setState({ state: store.getState() })
        // );
    }
    componentWillUnmount() {
        //this.unsubscribe();
    }
    render() {

        return (
            <Counter
            value={store.getState().counter}
            onIncrement={() => store.dispatch({ type: 'INCREMENT',payload: 1 })}
           
            />
        )
    }
}
export default CounterApp