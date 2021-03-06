import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store/todo'

export function AddTodo({ dispatch }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    dispatch(actions.addTodo(value))
    setValue('')
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        data-testid="todoText"
        placeholder={'Do that thing...'}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" data-testid="addTodo">
        +
      </button>
    </form>
  )
}

export default connect()(AddTodo)
