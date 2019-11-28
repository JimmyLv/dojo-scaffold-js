import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import FilterInfo from './components/FilterInfo'
import MessageList from './components/MessageList'
import NewMessageForm from './components/NewMessageForm'
import ShoppingCart from './components/ShoppingCart'
import TodoList from './components/TodoList'
import { actions, selectors } from './store/todo'

export class App extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(actions.fetchTodos())
  }

  render() {
    const { todos } = this.props
    const { messages } = this.state

    return (
      <div>
        <h1>
          Todos (<span className="count">{todos.length}</span>)
        </h1>
        <FilterInfo filters={['All', 'Active', 'Completed']} />
        <AddTodo />
        <TodoList todos={todos} />
        <hr />
        <div>
          <h1>Message List</h1>
          <NewMessageForm onSend={this.handleSend} />
          <MessageList messages={messages} />
        </div>
        <hr />
        <ShoppingCart />
      </div>
    )
  }

  handleSend = newMessage => {
    this.setState(state => ({
      messages: [...state.messages, newMessage],
    }))
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    todos: selectors.getVisibleTodos(state),
  }
}

export default connect(mapStateToProps)(App)
