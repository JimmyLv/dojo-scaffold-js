describe('ShoppingCart', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should show cart title', () => {
    cy.contains('React Shopping Cart')
  })
  it('should add new product item into cart', () => {
    cy.queryByTestId('newProduct').click()
    cy.queryByTestId('productCode').type('ITEM001')
    cy.queryByTestId('addProduct').click()

    cy.queryAllByTestId('productCode').should('contain', 'ITEM001')
  })
})
