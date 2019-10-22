import { action } from '@storybook/addon-actions'
import React from 'react'
import AddTodo from '../../../src/components/AddTodo'

export default {
  title: 'AddTodo',
}

export const todo = (_, act = action) => <AddTodo />
