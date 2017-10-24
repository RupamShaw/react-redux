import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
let nextTodoId = 0
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id:nextTodoId++
        })
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo