import React from 'react'
import { TodoItem } from '../../../src/components/TodoItem'
import { types } from '../../../src/store/todos'
import { fixCypressSpec } from '../../support'

describe('todo item', () => {
  beforeEach(fixCypressSpec(__filename, window))

  it('shows an item', () => {
    // given
    const props = {
      id: 1,
      text: 'test item',
      completed: false,
    }

    // when
    cy.mountWithRedux(<TodoItem {...props} />)

    // then
    cy.contains('test item')
      .toMatchSnapshot()
  })

  it('marks done items', () => {
    // given
    const props = {
      id: 1,
      text: 'test item',
      completed: true,
    }

    // when
    cy.mountWithRedux(<TodoItem {...props} />)

    // then
    cy.contains('test item').parent().should('have.class', 'done')
  })

  it('calls toggle on click', () => {
    // given
    const props = {
      id: 1,
      text: 'test item',
      completed: false,
    }
    // when
    cy.mountWithRedux(<TodoItem {...props} />)

    // then
    cy.contains('test item').click()
    // just verify the dispatched action
    cy.get('@dispatch').should('be.calledWith', {
      type: types.TOGGLE,
      payload: { id: 1 },
    })
  })

  it('remove item on click', () => {
    // given
    const props = {
      id: 1,
      text: 'test item',
      completed: true,
    }

    // when
    cy.mountWithRedux(<TodoItem {...props} />)

    // then
    cy.contains('test item').siblings('.delete').click()
    // just verify the dispatched action
    cy.get('@dispatch').should('be.calledWith', {
      type: types.REMOVE,
      payload: { id: 1 },
    })
  })
})
