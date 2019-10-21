import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <p>
        {this.props.todos.map(item => (
          <TodoItem key={item.id} {...item} />
        ))}
      </p>
    )
  }
}

export default TodoList
