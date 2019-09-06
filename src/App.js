import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import FilterInfo from './components/FilterInfo'
import TodoItem from './components/TodoItem'

export function App({ todos }) {
  return (
    <div>
      <h1>Todo</h1>
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
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(App)
