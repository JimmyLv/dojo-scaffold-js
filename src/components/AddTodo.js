import React, { useState } from 'react'
import { connect } from 'react-redux'
import todos from '../store/todos'

export function AddTodo({ dispatch }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    dispatch(todos.actions.addTodo(value))
    setValue('')
    e.preventDefault()
  }

  return <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder={'Do that thing...'}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <input type="submit" value="+" />
  </form>
}

export default connect()(AddTodo)
