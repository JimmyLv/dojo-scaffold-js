import React from 'react'
import * as todos from '../../../src/store/todo'
import { completed, todo } from './TodoItem.stories'

describe('<TodoItem />', () => {
  it('show completed item', () => {
    cy.mount(completed())

    cy.contains('test item')
      .parent()
      .should('have.class', 'done')
  })

  it('toggle completed on click', () => {
    cy.mount(todo())

    cy.contains('test item').click()
    cy.get('@dispatch').should('be.calledWith', {
      type: todos.types.TOGGLE,
      payload: { id: 1 },
    })
  })

  it('remove item on click', () => {
    cy.mount(todo())

    cy.contains('test item')
      .siblings('.delete')
      .click()
    cy.get('@dispatch').should('be.calledWith', {
      type: todos.types.REMOVE,
      payload: { id: 1 },
    })
  })
})
