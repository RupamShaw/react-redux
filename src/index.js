
import registerServiceWorker from './registerServiceWorker';

import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import React, { Component } from 'react'
import todoApp from './reducers';

const store = createStore(
    todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
let nextTodoId = 0;

class TodoApp extends Component {
    render() {
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
                       {this.props.todos.map( todo =>
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
            </div>  
        );  
    }
}

const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(<div>

    <TodoApp  todos= {store.getState().todos}/>
    </div>,
    rootEl
  );
};
render();
store.subscribe(render);
registerServiceWorker();
