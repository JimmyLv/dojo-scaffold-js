import React from 'react'
import AddProduct from '../../../src/components/AddProduct'

describe('<AddProduct/>', () => {
  beforeEach(() => {
    const handleAddProduct = cy.spy().as('addProductHandler')
    cy.mount(<AddProduct onAddProduct={handleAddProduct} />)
    cy.queryByTestId('newProduct').click()
    cy.contains('Add new Product...')
  })
  it('should add new product and reset field', () => {
    cy.queryByTestId('newProductCode').type('ITEM001')
    cy.queryByTestId('addProduct').click()
    cy.contains('Add new Product...').should('not.be.visible')
    cy.get('@addProductHandler').should('be.calledWith', {
      code: 'ITEM001',
      count: 1,
      price: 100,
    })
  })
  it('should not close modal when enter empty product code', () => {
    cy.queryByTestId('addProduct').click()
    cy.contains('Add new Product...').should('be.visible')
    cy.get('@addProductHandler').should('not.be.called')
  })
})
