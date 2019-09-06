import React from 'react'
import TodoItem from '../../src/components/TodoItem'

describe('todo item', () => {
  it('shows an item', () => {
    // given
    const props = {
      id: '1',
      value: 'test item',
      done: false,
    }
    // when
    cy.mount(<TodoItem {...props} />)

    // then
    cy.contains('test item')
  })

  it('marks done items', () => {
    // given
    const props = {
      id: '1',
      value: 'test item',
      done: true,
    }
    // when
    cy.mount(<TodoItem {...props} />)

    // then
    cy.contains('test item').should('have.class', 'done')
  })

  it('calls toggle on click', () => {
    // given
    const toggle = cy.spy().as('toggle')
    const props = {
      id: '1',
      value: 'test item',
      done: false,
      toggle,
    }
    // when
    cy.mount(<TodoItem {...props} />)

    // then
    cy.contains('test item').click()
    cy.get('@toggle').should('be.calledOnce')
  })
})
