import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import FilterInfo from './components/FilterInfo'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div>
      <h1>Todo</h1>
      <FilterInfo filters={['All', 'Done']} />
      <AddTodo />
      {[].forEach(item => <TodoItem {...item} />)}
    </div>
  )
}

export default App
