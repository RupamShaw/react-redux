
import registerServiceWorker from './registerServiceWorker';

import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import React, { Component } from 'react'
import todoApp from './reducers';

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
const FilterLink = ({ 
  filter,
  children
 }) => {
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
          store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
          }) ;
          }}
    >
      {children}
    </a>
  )
}
let nextTodoId = 0;
class TodoApp extends Component {
    render() {
      const visibleTodos = getVisibleTodos(
        this.props.todos,
        this.props.visibilityFilter
      );
        return(
            <div>
                <input ref={node => {
                this.input = node
                }} />
                <button onClick={ () => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++ 
                    }) ;
                    this.input.value = '';
                    }}>
                   Add Todo 
                   </button>
                   <ul>
                       {visibleTodos.map( todo =>
                          <li key = {todo.id}
                              onClick={() =>{
                                store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: todo.id 
                                }) ;
                              }}
                              style={{
                              textDecoration: todo.completed ? 'line-through' : 'none'
                              }}
                          >{todo.text}
                          </li>   
                        )
                        }
                    </ul>
                    <p>
                      Show:
                      {' '}
                      <FilterLink 
                        filter='SHOW_ALL'
                      >         
                        All
                      </FilterLink>  
                      {' '}
                      <FilterLink 
                        filter='SHOW_ACTIVE'
                      >         
                         Active
                      </FilterLink>  
                      {' '}
                      <FilterLink 
                        filter='SHOW_COMPLETED'
                      >         
                         Completed
                      </FilterLink>  
                    </p>
            </div>  
        );  
    }
}


const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(<div>

    <TodoApp  {...store.getState()}/>
    </div>,
    rootEl
  );
};
render();
store.subscribe(render);
registerServiceWorker();
