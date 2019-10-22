import React from 'react'
import AddModal from '../../../src/components/AddModal'

describe('<AddModal />', () => {
  it('should show modal with background', () => {
    cy.mount(<AddModal />)
    cy.get('body').toMatchImageSnapshot()
  })
})
