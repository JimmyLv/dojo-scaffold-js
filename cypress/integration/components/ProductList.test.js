import React from 'react'
import ProductList from '../../../src/components/ProductList'

describe('<ProductList/>', () => {
  function generate(code) {
    return {
      code: code,
      price: 100,
      count: 2,
    }
  }

  beforeEach(() => {
    const handleProductChange = cy.spy().as('handleProductChange')
    cy.mount(
      <ProductList
        products={[generate('ITEM001'), generate('ITEM002')]}
        onProductChange={handleProductChange}
      />
    )
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
