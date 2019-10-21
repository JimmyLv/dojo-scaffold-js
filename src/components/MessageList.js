import React, { Component } from 'react'

export default class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(item => (
          <li key={item}>{item}</li>
        ))}
      </div>
    )
  }
}
