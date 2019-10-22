import { action } from '@storybook/addon-actions'
import React from 'react'
import { TodoItem } from '../../../src/components/TodoItem'

export default {
  title: 'TodoItem',
}

export const todo = (_, act = action) => (
  <TodoItem
    id={1}
    text="test item"
    completed={false}
    dispatch={act('dispatch')}
  />
)

export const completed = (_, act = action) => (
  <TodoItem
    id={1}
    text="test item"
    completed={true}
    dispatch={act('dispatch')}
  />
)
