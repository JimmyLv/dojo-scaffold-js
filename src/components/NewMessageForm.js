import React, { Component } from 'react'

export default class NewMessageForm extends Component {
  state = {
    inputText: '',
  }

  render() {
    const { inputText } = this.state

    return (
      <div>
        <input
          type="text"
          data-testid="messageText"
          value={inputText}
          onChange={this.handleTextChange}
        />
        <button data-testid="sendButton" onClick={this.handleSend}>
          Send
        </button>
      </div>
    )
  }

  handleTextChange = e => {
    this.setState({
      inputText: e.target.value,
    })
  }

  handleSend = () => {
    const { onSend } = this.props
    const { inputText } = this.state

    onSend(inputText)
    this.setState({
      inputText: '',
    })
  }
}
