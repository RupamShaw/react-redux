
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react'

import store from './store.js'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import BankAppContainer from './containers/bank/BankAppContainer'


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
