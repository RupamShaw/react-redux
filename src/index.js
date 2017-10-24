
import registerServiceWorker from './registerServiceWorker';

import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import React, { Component } from 'react'
import todoApp from './reducers';
import Todo from './components/Todo'
import TodoList from './components/TodoList'
const store = createStore(
    todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const Todo =({
//     onClick,
//     completed,
//     text}) =>(
//     <li 
//       onClick= {onClick}
//       style={{
//       textDecoration: completed ? 'line-through' : 'none'
//       }}
//     >{text}
//     </li>  
// );

// const TodoList =({
//     todos,
//     onTodoClick
//   }) => (
//       <ul>
//         {todos.map(todo =>
//           <Todo 
//             key = {todo.id}
//             {...todo}
//             onClick={() => onTodoClick(todo.id)}
//           />
//         )}
//       </ul>  
// );

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
  currentFilter,
  children
 }) => {
   if (filter === currentFilter){
     return <span>{children}</span>
   }
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
      const {
        todos,
        visibilityFilter
      } = this.props;
      const visibleTodos = getVisibleTodos(
        todos,
        visibilityFilter
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
                    <TodoList 
                      todos={visibleTodos}
                      onTodoClick ={id => {
                                            store.dispatch({
                                            type: 'TOGGLE_TODO',
                                             id
                                            }) 
                                          }     
                      }
                    />
                    
                    <p>
                      Show:
                      {' '}
                      <FilterLink 
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                      >         
                        All
                      </FilterLink>  
                      {' '}
                      <FilterLink 
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                      >         
                         Active
                      </FilterLink>  
                      {' '}
                      <FilterLink 
                        filter='SHOW_COMPLETED'
                        currentFilter={visibilityFilter}
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
