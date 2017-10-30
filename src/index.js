
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react'

import store from './store.js'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import BankAppContainer from './containers/bank/BankAppContainer'
import CounterAppContainer from './containers/CounterAppContainer'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <BankAppContainer />
    <CounterAppContainer/>

  </div>
)

const rootEl = document.getElementById('root');
const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    rootEl
  );
  console.log('store changed',store.getState())
  
};
render();
store.subscribe(render);
store.dispatch({type: "SET_NAME", payload: "Will"})
store.dispatch({type: "SET_AGE", payload: 35})
store.dispatch({type: "SET_AGE", payload: 34})
store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"})
store.dispatch({type: "E", payload: "OMG LIKE LOL"})
registerServiceWorker();
