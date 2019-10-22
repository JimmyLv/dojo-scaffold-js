import React from 'react'
import AddTodo from '../../../src/components/AddTodo'
import * as todos from '../../../src/store/todo'
import { fixCypressSpec } from '../../support'
beforeEach(fixCypressSpec(__filename, window))

describe('<AddTodo />', () => {
  it('add new todo item', () => {
    // given
    const TODO_ITEM = 'new todo.'
    // when
    cy.mountWithRedux(<AddTodo />)

    // then
    // cy.get(AddTodo).toMatchSnapshot()
    cy.get('[type="text"]').type(TODO_ITEM)
    cy.get('button').click()
    // just verify the dispatched action
    cy.get('@dispatch').should('be.calledWith', {
      type: todos.types.ADD,
      payload: { id: 3, text: TODO_ITEM },
    })
  })
})
