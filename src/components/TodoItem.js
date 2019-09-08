import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { actions } from '../store/todos'

const StyledItem = styled.li.attrs(props => ({
  className: props.completed ? 'done' : undefined,
}))`
  color: ${props => props.completed ? '#d9d9d9' : '#000'};
  text-decoration: ${props => props.completed ? 'line-through' : ''};
`

export function TodoItem({ id, text, completed, dispatch }) {
  return <StyledItem
    completed={completed}
    onClick={() => dispatch(actions.toggle(id))}
  >
    {text} <span className="delete" onClick={() => dispatch(actions.remove(id))}>x</span>
  </StyledItem>
}

export default connect()(TodoItem)
