import React from 'react'
import AddTodo from '../../../src/components/AddTodo'
import FilterInfo from '../../../src/components/FilterInfo'
import TodoItem from '../../../src/components/TodoItem'
import * as filter from '../../../src/store/filter'
import * as todos from '../../../src/store/todos'
import { fixCypressSpec } from '../../support'
import fixReactDomScope from '../../support/fixReactDomScope'

beforeEach(fixCypressSpec(__filename, window))

describe('TodoItem Component', () => {

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
    cy.mountWithRedux(<TodoItem {...props} />)

    // then
    cy.contains('test item').parent().should('have.class', 'done')
  })

  it('toggle completed on click', () => {
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
      type: todos.types.TOGGLE,
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
      type: todos.types.REMOVE,
      payload: { id: 1 },
    })
  })
})

describe('AddTodo Component', () => {
  // beforeEach(() => { fixReactDomScope(window) })

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
      payload: { id: 0, text: TODO_ITEM },
    })
  })
})

describe('FilterInfo Component', () => {
  // beforeEach(fixCypressSpec(__filename, window))
  beforeEach(function() {
    // see https://github.com/bahmutov/cypress-react-unit-test/issues/51
    fixReactDomScope(window);
  });

  it('filter completed items', () => {
    // given
    const props = {
      filters: ['All', 'Active', 'Completed'],
    }
    // when
    cy.mountWithRedux(<FilterInfo {...props} />)

    // then
    // cy.get(FilterInfo).toMatchSnapshot()
    cy.contains('Active').click()
    // just verify the dispatched action
    cy.get('@dispatch').should('be.calledWith', {
      type: filter.types.FILTER,
      payload: { status: 'Active' },
    })
  })
})
