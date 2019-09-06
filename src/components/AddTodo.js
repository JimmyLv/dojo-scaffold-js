import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store/todos'

export function AddTodo({ dispatch }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    dispatch(actions.addTodo(value))
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
    <button type="submit">+</button>
  </form>
}

export default connect()(AddTodo)
