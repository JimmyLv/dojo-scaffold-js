import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import FilterInfo from './components/FilterInfo'
import TodoItem from './components/TodoItem'
import { getVisibleTodos } from './store/todos'

export function App({ todos }) {
  return (
    <div>
      <h1>Todo (<span className="count">{todos.length}</span>)</h1>
      <FilterInfo filters={['All', 'Active', 'Completed']} />
      <AddTodo />
      <p>
        {todos.map(item => <TodoItem key={item.id} {...item} />)}
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    todos: getVisibleTodos(state),
  }
}

export default connect(mapStateToProps)(App)
