describe('ShoppingCart', () => {
  beforeEach(() => {
    cy.visit('/')
    addProduct('ITEM001')
  })
  it('should show cart title', () => {
    cy.contains('React Shopping Cart')
  })

  it('should add new product item into cart', () => {
    cy.queryAllByTestId('productCode').should('contain', 'ITEM001')
  })
  it('should calculate total price given product list', () => {
    cy.queryByTestId('totalPrice').should('have.text', '￥100')
    addProduct('ITEM002')
    cy.queryByTestId('totalPrice').should('have.text', '￥200')
  })

  it('should only increase product count when add same product code', () => {
    addProduct('ITEM002')
    addProduct('ITEM002')
    cy.queryAllByTestId('productCode').should('have.length', 2)
    cy.contains('ITEM002')
      .siblings('span')
      .contains('2')
  })

  function addProduct(code) {
    cy.queryByTestId('newProduct').click()
    cy.queryByTestId('newProductCode').type(code)
    cy.queryByTestId('addProduct').click()
  }
})
