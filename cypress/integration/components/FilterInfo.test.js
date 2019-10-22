import React from 'react'
import * as filter from '../../../src/store/filter'
import { fixCypressSpec } from '../../support'
import { filters } from './FilterInfo.stories'

beforeEach(fixCypressSpec(__filename, window))

describe('<FilterInfo />', () => {
  it('filter completed items', () => {
    cy.mount(filters())
    cy.contains('Active').click()
    // just verify the dispatched action
    cy.get('@dispatch').should('be.calledWith', {
      type: filter.types.FILTER,
      payload: { status: 'Active' },
    })
  })
})
