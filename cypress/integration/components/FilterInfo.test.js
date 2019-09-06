import React from 'react'
import { FilterInfo } from '../../../src/components/FilterInfo'
import { types } from '../../../src/store/filter'

it('filter completed items', () => {
  // given
  const dispatch = cy.spy().as('dispatch')
  const props = {
    filters: ['All', 'Active', 'Completed'],
    dispatch,
  }
  // when
  cy.mount(<FilterInfo {...props} />)

  // then
  cy.contains('Completed').click()
  // just verify the dispatched action
  cy.get('@dispatch').should('be.calledWith', {
    type: types.FILTER,
    payload: { status: 'Completed' },
  })
})
