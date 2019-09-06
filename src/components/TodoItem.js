import React from 'react'
import { connect } from 'react-redux'
import todos from '../store/todos'
import './TodoItem.css'

export function TodoItem({ id, text, completed, dispatch }) {
  return <li
    className={completed ? 'done' : undefined}
    onClick={() => dispatch(todos.actions.toggle(id))}
  >
    {text}
  </li>
}

export default connect()(TodoItem)
