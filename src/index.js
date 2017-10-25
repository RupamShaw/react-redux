
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import React, { Component } from 'react'
//import App from './reducers';
import store from './store.js'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import BankAppContainer from './containers/bank/BankAppContainer'

// const store = createStore(
//   App,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <BankAppContainer />

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
};
render();
store.subscribe(render);
registerServiceWorker();
