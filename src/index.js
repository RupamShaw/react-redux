
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import React, { Component } from 'react'
import todoApp from './reducers';
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Link from './components/Link'
//import Footer from './components/Footer'
//import AddTodo from './containers/AddTodo'
const store = createStore(
    todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


class FilterLink extends Component{
  componentDidMount(){
   this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );  
  }

  componentWillUnMount(){
    this.unsubscribe();
  }

  render(){
    const props = this.props;
    const state = store.getState();

    return (
      <Link active= {
          props.filter === state.visibilityFilter

      } onClick ={ () => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter:props.filter
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
const AddTodo = () => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text:input.value,
          id: nextTodoId++
        })
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
}

class VisibleTodoList extends Component{
  componentDidMount(){
    this.unsubscribe = store.subscribe(() =>
       this.forceUpdate()
     );  
   }
 
   componentWillUnMount(){
     this.unsubscribe();
   }
 
  render(){
    const props = this.props;
    const state = store.getState();
return(
<TodoList 
  todos={  getVisibleTodos(
      state.todos,
      state.visibilityFilter
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
);}
}

let nextTodoId = 0;

const TodoApp = () =>(
  <div>
    <AddTodo />
    <VisibleTodoList/>
    <Footer />
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
