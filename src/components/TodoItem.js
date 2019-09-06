import React from 'react'

function TodoItem({ id, value, done, toggle }) {
  return <li
    className={done ? 'done' : undefined}
    onClick={e =>
      toggle({
        value: done,
        id: id,
      })
    }
  >
    {value}
  </li>
}

export default TodoItem
