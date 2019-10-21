import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { actions } from '../store/todo'

const StyledItem = styled.li.attrs(props => ({
  className: props.completed ? 'done' : undefined,
}))`
  color: ${props => (props.completed ? '#d9d9d9' : '#000')};
  text-decoration: ${props => (props.completed ? 'line-through' : undefined)};
`

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch()
  return (
    <StyledItem completed={completed}>
      <span onClick={() => dispatch(actions.toggle(id))}>{`${text} `}</span>
      <span className="delete" onClick={() => dispatch(actions.remove(id))}>
        x
      </span>
    </StyledItem>
  )
}

export default TodoItem
