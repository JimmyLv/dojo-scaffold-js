import React from 'react'
import { list } from './ProductList.stories'

describe('<ProductList/>', () => {
  beforeEach(() => {
    cy.mount(list())
  })
  it('should increase product when given item code', () => {
    cy.contains('ITEM001')
      .siblings()
      .children('[data-testid="increaseCount"]')
      .click()
    cy.get('@handleProductChange').should('be.calledWith', {
      code: 'ITEM001',
      count: 3,
      price: 100,
    })
  })
  it('should decrease product when given item code', () => {
    cy.contains('ITEM002')
      .siblings()
      .children('[data-testid="decreaseCount"]')
      .click()
    cy.get('@handleProductChange').should('be.calledWith', {
      code: 'ITEM002',
      count: 1,
      price: 100,
    })
    cy.contains('ITEM002')
      .siblings()
      .children('[data-testid="decreaseCount"]')
      .click()
    cy.get('@handleProductChange').should('be.calledWith', {
      code: 'ITEM002',
      count: 1,
      price: 100,
    })
  })
})
