import React from 'react'
import AddProduct from '../../../src/components/AddProduct'

describe('<AddProduct/>', () => {
  let handleAddProduct

  beforeEach(() => {
    handleAddProduct = cy.spy()
    cy.mount(<AddProduct onAddProduct={handleAddProduct} />)
    cy.queryByTestId('newProduct').click()
    cy.contains('Add new Product...')
    cy.queryByTestId('productCode').type('ITEM001')
    cy.queryByTestId('addProduct').click()
  })
  it('should add new product and reset field', () => {
    cy.contains('Add new Product...').should('not.visible')
    expect(handleAddProduct).to.be.calledWith('ITEM001')
  })
})
