import React from 'react'

function TodoItem({ id, text, complete, toggle }) {
  return <li
    className={complete ? 'done' : undefined}
    onClick={e =>
      toggle({
        text: complete,
        id: id,
      })
    }
  >
    {text}
  </li>
}

export default TodoItem
