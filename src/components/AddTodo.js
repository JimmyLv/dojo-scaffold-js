import React, { useState } from 'react'

export default function AddTodo() {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
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
