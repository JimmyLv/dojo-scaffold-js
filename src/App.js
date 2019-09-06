import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import FilterInfo from './components/FilterInfo'

function App() {
  return (
    <div>
      <h1>Todo</h1>
      <FilterInfo filters={['All', 'Done']}/>
      {[].forEach(item => <TodoItem {...item} />)}
    </div>
  )
}

export default App
