
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import React, { Component } from 'react'
import todoApp from './reducers';
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Link from './components/Link'
import {Provider}  from 'react-redux'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter

      } onClick={() => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter
        })
      }}>
        {props.children}
      </Link>
    )
  }
}

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL"
    >
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE"

    >
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED"

    >
      Completed
    </FilterLink>
  </p>
)
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
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
