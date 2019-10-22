import React from 'react'
import { modal } from './AddModal.stories'

describe('<AddModal />', () => {
  beforeEach(() => {
    const action = name => cy.spy().as(name)
    cy.mount(modal(null, action))
  });
  it('should show and hidden modal with background', () => {
    cy.findByTestId('modalBackground').click()
    cy.get('@toggleAddModal').should('be.called')
  })
  it('should add new product code and toggle modal', () => {
    cy.queryByTestId('newProductCode').type('ITEM001')
    cy.queryByTestId('addProduct').click()
    cy.get('@handleAdd').should('be.calledWith', 'ITEM001')
    cy.get('@toggleAddModal').should('be.called')
  })
  it('should not close modal when enter empty product code', () => {
    cy.queryByTestId('addProduct').click()
    cy.get('@handleAdd').should('be.not.called')
    cy.get('@toggleAddModal').should('be.not.called')
  })
})
