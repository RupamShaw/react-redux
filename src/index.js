
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import React, { Component } from 'react'
import todoApp from './reducers';
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import FilterLink from './containers/FilterLink'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
const store = createStore(
    todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

let nextTodoId = 0;

const TodoApp = ({
  todos,
  visibilityFilter
}) =>(
  <div>
    <AddTodo onAddClick={text =>
      store.dispatch({
                  type: 'ADD_TODO',
                  text,
                  id: nextTodoId++ 
            }) 
    }/>
    
    <TodoList 
      todos={  getVisibleTodos(
          todos,
          visibilityFilter
        )
      }
      onTodoClick ={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
            }) 
          }     
        }
    />
    
    <Footer 
        visibilityFilter ={visibilityFilter}
        onFilterClick ={filter => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            }) 
          }

        }
    />
  </div> 
)    

const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(
  <div>
    <TodoApp  {...store.getState()}/>
  </div>,
  rootEl
  );
};
render();
store.subscribe(render);
registerServiceWorker();
