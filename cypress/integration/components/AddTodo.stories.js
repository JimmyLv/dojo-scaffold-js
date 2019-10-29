import React from 'react'
import { AddTodo } from '../../../src/components/AddTodo'
import act from '../common/action'

export default {
  title: 'AddTodo',
}

export const todo = () => <AddTodo dispatch={act('dispatch')} />
