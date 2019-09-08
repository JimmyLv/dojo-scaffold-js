import React from 'react'
import { TodoItem } from '../../../src/components/TodoItem'
import { types } from '../../../src/store/todos'

describe('todo item', () => {
  it('shows an item', () => {
    // given
    const props = {
      id: 1,
      text: 'test item',
      completed: false,
    }
    // when
    cy.mount(
      <TodoItem {...props} />,
    )

    // then
    cy.contains('test item')
      .toMatchImageSnapshot()
  })

  it('marks done items', () => {
    // given
    const props = {
      id: 1,
      text: 'test item',
      completed: true,
    }
    // when
    cy.mount(<TodoItem {...props} />)

    // then
    cy.contains('test item').should('have.class', 'done')
  })

  it('calls toggle on click', () => {
    // given
    const dispatch = cy.spy().as('dispatch')
    const props = {
      id: 1,
      text: 'test item',
      completed: false,
      dispatch,
    }
    // when
    cy.mount(<TodoItem {...props} />)

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
    const dispatch = cy.spy().as('dispatch')
    const props = {
      id: 1,
      text: 'test item',
      completed: true,
      dispatch,
    }
    // when
    cy.mount(<TodoItem {...props} />)

    // then
    cy.contains('test item').children('.delete').click()
    // just verify the dispatched action
    cy.get('@dispatch').should('be.calledWith', {
      type: types.REMOVE,
      payload: { id: 1 },
    })
  })

})
