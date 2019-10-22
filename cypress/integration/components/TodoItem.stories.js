import React from 'react'
import { TodoItem } from '../../../src/components/TodoItem'
import act from '../common/action'

export default {
  title: 'TodoItem',
}

export const todo = () => (
  <TodoItem
    id={1}
    text="test item"
    completed={false}
    dispatch={act('dispatch')}
  />
)

export const completed = () => (
  <TodoItem
    id={1}
    text="test item"
    completed={true}
    dispatch={act('dispatch')}
  />
)
